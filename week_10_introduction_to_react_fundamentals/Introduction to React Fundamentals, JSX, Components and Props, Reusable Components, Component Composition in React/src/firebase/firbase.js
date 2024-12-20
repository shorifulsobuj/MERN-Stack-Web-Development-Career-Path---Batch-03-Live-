// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwyFlBaX_yprDOJS59mYOdw8ZcZiQsd5A",
  authDomain: "fir-41a76.firebaseapp.com",
  projectId: "fir-41a76",
  storageBucket: "fir-41a76.firebasestorage.app",
  messagingSenderId: "533855964950",
  appId: "1:533855964950:web:dc97720eeb184bc8daca37",
  measurementId: "G-ZBFFRBMBHV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
