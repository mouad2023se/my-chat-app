import { initializeApp } from "firebase/app";
import {
  browserLocalPersistence,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwfGufcrHHRPdInkvxPOpwmPCnm8-oxFg",
  authDomain: "my-chat-app-662c8.firebaseapp.com",
  projectId: "my-chat-app-662c8",
  storageBucket: "my-chat-app-662c8.firebasestorage.app",
  messagingSenderId: "472661519210",
  appId: "1:472661519210:web:5c2b19f839f1a79e7ed313",
  measurementId: "G-SLP40QEXMJ"
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
