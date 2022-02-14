import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/auth' 
import 'firebase/database'
const firebaseConfig = {
  apiKey: "AIzaSyC8GCEHd75vdcJQ0RHiLzQeArW81jm1U-k",
  authDomain: "chat-app2-4fcfa.firebaseapp.com",
  projectId: "chat-app2-4fcfa",
  storageBucket: "chat-app2-4fcfa.appspot.com",
  messagingSenderId: "1050998473051",
  appId: "1:1050998473051:web:eab7bfca8920fdf8c5da7e",
  measurementId: "G-Y552PTPPZL"
};
  
  // Initialize Firebase

  export default initializeApp(firebaseConfig) ; 