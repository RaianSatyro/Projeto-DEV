// Isso vai verificar se o usuario ja fez login e vai manter ele logado 

import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
const auth = getAuth();


function monitora_estado_User(){
    onAuthStateChanged(auth, (user) =>{
        if (user) {
            window.location.href = "src/pages/home.html"; 
            console.log("Mantendo logado")
        }
    })
}

window.addEventListener('load', monitora_estado_User())
