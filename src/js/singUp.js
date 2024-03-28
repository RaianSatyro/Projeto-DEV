import { createUser } from "./firebase/firebase-creatUser.js";


document.getElementById('btn-criar-conta').addEventListener('click', () => {
    const userEmail = document.querySelector('#form-email').value;
    const userPass = document.querySelector('#form-senha').value;

    // Chama a função createUser para criar o usuário
    createUser(userEmail, userPass);
});