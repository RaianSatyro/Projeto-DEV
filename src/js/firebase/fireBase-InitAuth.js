import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";


const firebaseConfig = {
    apiKey: "AIzaSyA4s1zx9j47X3nT9njP7jS7FNbImdnk_a4",
    authDomain: "login-user-6e7fa.firebaseapp.com",
    projectId: "login-user-6e7fa",
    storageBucket: "login-user-6e7fa.appspot.com",
    messagingSenderId: "388334286783",
    appId: "1:388334286783:web:4ca7f6f12a03e757a1130a"
  };

// Initialize Firebase
const appAuth = initializeApp(firebaseConfig);

export default appAuth;