// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWvdNFS1rzMwqey8zyKjSwpbnz5FzSKwo",
  authDomain: "react-authentication-74f3a.firebaseapp.com",
  projectId: "react-authentication-74f3a",
  storageBucket: "react-authentication-74f3a.appspot.com",
  messagingSenderId: "512592396239",
  appId: "1:512592396239:web:e927c76d402da1a21f1cba",
  measurementId: "G-151G4ECPH2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app);
export default app;
// const analytics = getAnalytics(app);