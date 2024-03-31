// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTMtrXDJQrQI6fi7t7MHINIuEtDXOOtRU",
  authDomain: "movie-ott-ae3cc.firebaseapp.com",
  projectId: "movie-ott-ae3cc",
  storageBucket: "movie-ott-ae3cc.appspot.com",
  messagingSenderId: "511938396171",
  appId: "1:511938396171:web:ffe32ad8cf7edc7696870e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
