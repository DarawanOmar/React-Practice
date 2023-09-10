// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlq2XYbuH_gPWrVOl8rYbA_5LOamMsAX8",
  authDomain: "test-11326.firebaseapp.com",
  projectId: "test-11326",
  storageBucket: "test-11326.appspot.com",
  messagingSenderId: "229794105126",
  appId: "1:229794105126:web:ecec15aa12afb72f3323e7",
  measurementId: "G-WS8RH6X31T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
