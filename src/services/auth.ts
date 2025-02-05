// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAF4lg2R0b4V0kHySxbBgQpcJ3klk5vIiw",
  authDomain: "itmtp-guide.firebaseapp.com",
  projectId: "itmtp-guide",
  storageBucket: "itmtp-guide.firebasestorage.app",
  messagingSenderId: "683575006902",
  appId: "1:683575006902:web:a6980b61c1ba67f8bcb817",
  measurementId: "G-0PE4YTLHJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
