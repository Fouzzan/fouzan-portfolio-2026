// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo-xzt64yS7rDDMGSwSu0cDM4sbuOEcDE",
  authDomain: "portfolio-fouzan.firebaseapp.com",
  projectId: "portfolio-fouzan",
  storageBucket: "portfolio-fouzan.firebasestorage.app",
  messagingSenderId: "189262556618",
  appId: "1:189262556618:web:d0e656eab8efd59164b333",
  measurementId: "G-L38WM2JMQP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);