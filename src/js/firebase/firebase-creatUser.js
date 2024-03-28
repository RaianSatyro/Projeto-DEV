import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyA4s1zx9j47X3nT9njP7jS7FNbImdnk_a4",
    authDomain: "login-user-6e7fa.firebaseapp.com",
    projectId: "login-user-6e7fa",
    storageBucket: "login-user-6e7fa.appspot.com",
    messagingSenderId: "388334286783",
    appId: "1:388334286783:web:4ca7f6f12a03e757a1130a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function createUser(userEmail, userPass) {
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((userCredential) => {
        // Usuário criado com sucesso
        const user = userCredential.user;
        console.log("Usuário cadastrado com sucesso:", user.uid);
        // Você pode redirecionar o usuário para outra página, por exemplo:
        // window.location.href = "pagina-de-sucesso.html";
      })
      .catch((error) => {
        // Erro ao criar o usuário
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao cadastrar usuário:", errorCode, errorMessage);
      });
  }
  
  // Exporte a função createUser para ser utilizada em outros arquivos
  export { createUser };
