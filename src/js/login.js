import { login } from "./firebase/firebase-auth.js";

const botaoLogin = document.querySelector("#botao-login");
const email = document.querySelector("#form-email");
const senha = document.querySelector("#form-senha");


botaoLogin.addEventListener("click", () => {
    login(email.value, senha.value);

});
