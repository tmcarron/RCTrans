// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs8WX7ASeaVI36mYlGnwkLjvvcw2YrPvw",
  authDomain: "rctransandgear-96992.firebaseapp.com",
  projectId: "rctransandgear-96992",
  storageBucket: "rctransandgear-96992.firebasestorage.app",
  messagingSenderId: "478885577189",
  appId: "1:478885577189:web:5639b38ba5ec907165ef0c",
  measurementId: "G-L28TPPQFFQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
