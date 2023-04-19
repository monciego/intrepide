// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvlD8CIRlmDyQ3t7Cpzh9iu0NX8CbGTJg",
  authDomain: "intrepide-5620a.firebaseapp.com",
  projectId: "intrepide-5620a",
  storageBucket: "intrepide-5620a.appspot.com",
  messagingSenderId: "982853393680",
  appId: "1:982853393680:web:2af1fd78c68b7f6b495995",
  measurementId: "G-5Q1KKJ47XM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
