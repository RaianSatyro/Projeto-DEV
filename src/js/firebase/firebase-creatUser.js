import appAuth from './fireBase-InitAuth.js'
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";


const auth = getAuth(appAuth);

function createUser(userEmail, userPass) {
    createUserWithEmailAndPassword(auth, userEmail, userPass)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log("Usuário cadastrado com sucesso:", user.uid);
        window.location.href = "/src/pages/cadastro-sucess.html";
      })
      .catch((error) => {
        // Erro ao criar o usuário
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Erro ao cadastrar usuário: ${errorCode} ${errorMessage}`);
      });
  }
  
  export { createUser };
