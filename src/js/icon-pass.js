function mostrarSenha(){
    const form_senha = document.querySelector('#form_senha');
    const btnShowPass = document.querySelector('#btn-icon');

    if(form_senha.type === 'password'){
        form_senha.setAttribute('type', 'text');
        btnShowPass.setAttribute('class', 'bi bi-eye-slash');
    }
    else{
        form_senha.setAttribute('type', 'password');
        btnShowPass.setAttribute('class', 'bi bi-eye');
    }

}