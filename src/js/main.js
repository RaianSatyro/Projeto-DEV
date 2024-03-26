import { subfofoq } from './firebase/app.js'

document.getElementById("registrationForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    const nome = document.getElementById("form-nome").value.trim();
    const sobrenome = document.getElementById("form-sobrenome").value.trim();
    const email = document.getElementById("form-email").value.trim();
    const senha = document.getElementById("form-senha").value.trim();

    if (!nome || !sobrenome || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        await subfofoq({ nome, sobrenome, email, password: senha });
        console.log('Inscrição enviada com sucesso.');

        document.getElementById("registrationForm").reset();
    } catch (error) {
        console.error('Erro ao enviar inscrição:', error);
    }
});
