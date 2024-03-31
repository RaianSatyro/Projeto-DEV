import { getAuth,signOut } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth();

 

const botaoLogout = document.querySelector("#botao-logout");
botaoLogout.addEventListener("click", () => {
    logout();
    console.log("Clickou")
});


function logout() {
    signOut(auth).then(() => {
        
        window.location.href = "index.html";
        console.log("Deu boa")
    }).catch((error) => {
       
        console.error("Erro ao fazer logout:", error);
    });
}