// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNpyl5xYTXrsLaVgYEniZYsvr3dhKlDYw",
  authDomain: "evolove-56393.firebaseapp.com",
  projectId: "evolove-56393",
  storageBucket: "evolove-56393.appspot.com",
  messagingSenderId: "989895439172",
  appId: "1:989895439172:web:c8a6fc354154abade69d11",
  measurementId: "G-CNFC0DVHMZ"
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(Firebase);
export const storage = getStorage(Firebase);
export default Firebase