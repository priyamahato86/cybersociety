import { createContext, useContext, useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider, db } from "../firebase";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = (email, password) => createUserWithEmailAndPassword(auth, email, password);
  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => signInWithPopup(auth, provider);
  const logout = () => signOut(auth);

  // Device management
  const addDevice = async (uid, deviceId) => {
    const devicesRef = collection(db, "devices");
    const q = query(devicesRef, where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.size >= 2) {
      throw new Error("Device limit reached (max 2 devices allowed).");
    }

    await addDoc(devicesRef, { uid, deviceId, timestamp: Date.now() });
  };

  const removeDevice = async (uid, deviceId) => {
    const devicesRef = collection(db, "devices");
    const q = query(devicesRef, where("uid", "==", uid), where("deviceId", "==", deviceId));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(async (docSnap) => {
      await deleteDoc(doc(db, "devices", docSnap.id));
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const deviceId = navigator.userAgent; // crude device identifier
          await addDevice(currentUser.uid, deviceId);
        } catch (error) {
          alert(error.message);
          await logout();
        }
      }
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    register,
    login,
    googleLogin,
    logout,
    removeDevice,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
