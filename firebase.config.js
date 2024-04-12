// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7AbpieWm1s9U_p24m6zjCTEssEKLh5Xw",
  authDomain: "jiocinema-clone.firebaseapp.com",
  projectId: "jiocinema-clone",
  storageBucket: "jiocinema-clone.appspot.com",
  messagingSenderId: "70338677774",
  appId: "1:70338677774:web:5e0ab4ad76adcc78dac05f",
  measurementId: "G-FQE9YJ3MGD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export default firebaseConfig;
