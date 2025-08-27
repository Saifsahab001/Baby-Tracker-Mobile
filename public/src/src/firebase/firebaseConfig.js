// Import required Firebase services
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0nVVDGrmggGtcgl0LbeIt9bNRLpBU4u0",
  authDomain: "babytracker001-353ed.firebaseapp.com",
  projectId: "babytracker001-353ed",
  storageBucket: "babytracker001-353ed.firebasestorage.app",
  messagingSenderId: "654744438270",
  appId: "1:654744438270:web:6cee0fda9a7dcb87f06caf",
  measurementId: "G-WP2DP4FW8E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
