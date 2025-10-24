// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

// Firebase config from .env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore
export const db = getFirestore(app);

// Auth
export const auth = getAuth(app);

// Google provider for login (export as 'provider' for consistency)
export const provider = new GoogleAuthProvider();
export const googleProvider = provider; // Alias for compatibility

// RecaptchaVerifier instance (singleton)
let recaptchaVerifier = null;

// Setup reCAPTCHA verifier for SMS 2FA
export const getRecaptchaVerifier = (containerId = "recaptcha-container") => {
  // Clear existing verifier if container changed
  if (recaptchaVerifier) {
    try {
      recaptchaVerifier.clear();
    } catch (e) {
      // Ignore if already cleared
    }
  }

  // firebase.js (CORRECT 👍)

  recaptchaVerifier = new RecaptchaVerifier(
    auth, // <-- auth must be the FIRST argument
    containerId, // <-- containerId is the SECOND argument
    {
      // <-- options is the THIRD argument
      size: "invisible",
      callback: (response) => {
        console.log("reCAPTCHA solved");
      },
      "expired-callback": () => {
        console.log("reCAPTCHA expired");
      },
    }
  );

  return recaptchaVerifier;
};

// Helper function to send SMS OTP
export const sendOTP = (phoneNumber) => {
  const appVerifier = getRecaptchaVerifier();
  return signInWithPhoneNumber(auth, phoneNumber, appVerifier);
};

export default app;
