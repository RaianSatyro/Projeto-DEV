function validarCampos() {
    const emailValido = verificarEmail();
    const botaoRecuperaSenha = document.querySelector('#recupera-senha');
    botaoRecuperaSenha.disabled = !emailValido;
    if (!emailValido) {
        botaoRecuperaSenha.classList.add('botao-invalido');
    } else {
        botaoRecuperaSenha.classList.remove('botao-invalido');
    }
}

function verificarEmail() {
    const email = document.querySelector('#form-email').value;
    if (!email) {
        console.log('E-mail vazio');
        return false; // Retorna falso se o campo estiver vazio
    }

    const formatoValido = validarFormatoEmail(email);
    if (!formatoValido) {
        console.log('Formato de e-mail inválido');
        return false; // Retorna falso se o formato do e-mail for inválido
    }

    console.log('E-mail válido');
    return true; // Retorna verdadeiro se o e-mail for válido
}

function validarFormatoEmail(email) {
    return /\S+@\S+/.test(email);
}


// Chama a função validarCampos quando o valor do campo de e-mail muda
document.querySelector('#form-email').addEventListener('input', validarCampos);
