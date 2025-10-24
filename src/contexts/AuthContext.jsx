import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth, googleProvider, db, sendOTP } from "../firebase";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [is2FAVerified, setIs2FAVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  // Generate consistent device ID
  const getDeviceId = () => {
    let deviceId = localStorage.getItem("deviceId");
    if (!deviceId) {
      deviceId = `${navigator.userAgent}_${Date.now()}_${Math.random()}`;
      localStorage.setItem("deviceId", deviceId);
    }
    return deviceId;
  };

  // Email/password registration & login
  const register = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Google login/signup
  const googleLogin = () => signInWithPopup(auth, googleProvider);

  // Logout
  const logout = async () => {
    await signOut(auth);
    setIs2FAVerified(false);
    sessionStorage.removeItem("is2FAVerified");
  };

  // Phone OTP (2FA)
  const sendPhoneOTP = async (phoneNumber) => {
    if (!user) throw new Error("User must be logged in first");
    try {
      const confirmationResult = await sendOTP(phoneNumber);
      window.confirmationResult = confirmationResult;
      return true;
    } catch (error) {
      console.error("Error sending OTP:", error);
      throw error;
    }
  };

  const verifyOTP = async (otp) => {
    try {
      const result = await window.confirmationResult.confirm(otp);
      const loggedUser = result.user;

      // Trust this device if first time
      const userDocRef = doc(db, "users", loggedUser.uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        if (!userDoc.data().trustedDeviceId) {
          const deviceId = getDeviceId();
          await updateDoc(userDocRef, {
            trustedDeviceId: deviceId,
            trustedAt: Date.now(),
          });
          console.log("Device trusted:", deviceId);
        }
      } else {
        await setDoc(userDocRef, {
          email: loggedUser.email,
          uid: loggedUser.uid,
          trustedDeviceId: getDeviceId(),
          trustedAt: Date.now(),
        });
        console.log("User doc created & device trusted");
      }

      setIs2FAVerified(true);
      sessionStorage.setItem("is2FAVerified", "true");
      console.log("2FA successful:", loggedUser);
      return loggedUser;
    } catch (error) {
      console.error("OTP verification failed:", error);
      throw error;
    }
  };

  // Track auth state and handle device restriction
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const deviceId = getDeviceId();
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (!userDoc.exists()) {
            // First login ever, create user doc without trustedDeviceId
            await setDoc(userDocRef, {
              email: currentUser.email,
              uid: currentUser.uid,
              trustedDeviceId: null,
            });
            setIs2FAVerified(false); // Must do 2FA
          } else {
            const trustedDeviceId = userDoc.data().trustedDeviceId;

            if (!trustedDeviceId) {
              // First-time 2FA not done
              setIs2FAVerified(false);
            } else if (trustedDeviceId !== deviceId) {
              // Device mismatch
              alert("Login blocked: This account is locked to another device.");
              await signOut(auth);
              setUser(null);
              setIs2FAVerified(false);
              setLoading(false);
              return;
            } else {
              // Device match
              const stored2FA = sessionStorage.getItem("is2FAVerified");
              setIs2FAVerified(stored2FA === "true");
            }
          }
        } catch (error) {
          console.error("Device check error:", error);
          alert(error.message);
          await signOut(auth);
          setUser(null);
          setIs2FAVerified(false);
          setLoading(false);
          return;
        }
      } else {
        // User signed out
        setIs2FAVerified(false);
        sessionStorage.removeItem("is2FAVerified");
      }

      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    is2FAVerified,
    setIs2FAVerified,
    register,
    login,
    googleLogin,
    logout,
    sendPhoneOTP,
    verifyOTP,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
