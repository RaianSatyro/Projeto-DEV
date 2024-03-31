import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import appAuth from './fireBase-InitAuth.js';

const auth = getAuth(appAuth);

function createUser(userEmail, userPass) {
    createUserWithEmailAndPassword(auth, userEmail, userPass)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Usuário cadastrado com sucesso:", user.uid);
            mostrarRegistroSucessoDialog();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Erro ao cadastrar usuário: ${errorCode} ${errorMessage}`);
        });
}

function mostrarRegistroSucessoDialog() {
  const dialog = document.getElementById("registroSucessoDialog");
  dialog.style.display = "block";
  setTimeout(() => {
      dialog.style.opacity = "1"; // Altera a opacidade para 1
      dialog.style.transform = "translateY(0)"; // Remove a transformação translateY
  }, 50); // Adiciona um pequeno atraso para garantir que a transição seja aplicada corretamente
}


export { createUser, mostrarRegistroSucessoDialog };
