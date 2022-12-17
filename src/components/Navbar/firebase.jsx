// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_Avapd-4cO7UHlRhxe7qdhEVo3v1-Mro",
  authDomain: "wakehealhty.firebaseapp.com",
  projectId: "wakehealhty",
  storageBucket: "wakehealhty.appspot.com",
  messagingSenderId: "453189083816",
  appId: "1:453189083816:web:ce3dc899a3bcefc6d4189d",
  measurementId: "G-G7S7HVQ9KQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);