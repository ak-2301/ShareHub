// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnH2I9SrjfMvTmU7b703ia_t22EZWAQuA",
  authDomain: "sharehub-fc86e.firebaseapp.com",
  projectId: "sharehub-fc86e",
  storageBucket: "sharehub-fc86e.appspot.com",
  messagingSenderId: "972431605448",
  appId: "1:972431605448:web:31b949d2a33ebf91dbeffd",
  measurementId: "G-ZVSV8B22KN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
