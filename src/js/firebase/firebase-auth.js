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

export function login(email, senha) {
    signInWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Usuário autenticado com sucesso
            const user = userCredential.user;
            console.log('Login realizado com sucesso', user);
            loginValid();
        })
        .catch((error) => {
            // Ocorreu um erro durante a autenticação
            console.error('Erro ao fazer login:', error.message);
            alert('Usuário ou senha inválida');
        });
}

function loginValid(){
    window.location.href = "/src/pages/home.html";
}
// Chama a função login quando a página é carregada


// Isso vai verificar se o usuario ja fez login e vai manter ele logado 

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        window.location.href = "../home.html"; 
    }
});