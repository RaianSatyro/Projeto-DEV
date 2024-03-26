// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcl39LJC90QEsdc0s28_f_dBSgvjR6Uko",
  authDomain: "fofoq-db.firebaseapp.com",
  databaseURL: "https://fofoq-db-default-rtdb.firebaseio.com",
  projectId: "fofoq-db",
  storageBucket: "fofoq-db.appspot.com",
  messagingSenderId: "42924504062",
  appId: "1:42924504062:web:cafec00dc49fc87294c6af",
  measurementId: "G-NV8XW0THHR"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;