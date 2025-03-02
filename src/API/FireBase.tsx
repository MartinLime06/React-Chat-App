// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDy4Y8vlHytweSCqHmCBOwGFMFs0aAYCdM",
  authDomain: "chat-app-31229.firebaseapp.com",
  projectId: "chat-app-31229",
  storageBucket: "chat-app-31229.firebasestorage.app",
  messagingSenderId: "369025438361",
  appId: "1:369025438361:web:dec4487c0c717d1504de08",
  measurementId: "G-09KY9ZJ94L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);
export const auth = getAuth(app);

export { app, db };