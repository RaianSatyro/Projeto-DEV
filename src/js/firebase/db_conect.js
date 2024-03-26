
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"

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