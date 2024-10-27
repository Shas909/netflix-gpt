// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB02o74wgqpR786EXrGPlPZG1woSVYSA-4",
  authDomain: "netflixgpt-89ea7.firebaseapp.com",
  projectId: "netflixgpt-89ea7",
  storageBucket: "netflixgpt-89ea7.appspot.com",
  messagingSenderId: "497833748189",
  appId: "1:497833748189:web:0d0ef69254e5f87ce99d34",
  measurementId: "G-805FVBSJ3G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
