import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAz03yxw0IVyKVxA4Ya-f4DeEvL3WtMfqg",
  authDomain: "chat-app-15547.firebaseapp.com",
  projectId: "chat-app-15547",
  storageBucket: "chat-app-15547.firebasestorage.app",
  messagingSenderId: "1074865559378",
  appId: "1:1074865559378:web:1ebbc6f992fa7fce868c8b",
  measurementId: "G-15CCXLZ4HW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log("Firebase auth persistence set to localStorage.");
  })
  .catch((error) => {
    console.error("Error setting Firebase persistence:", error);
  });
