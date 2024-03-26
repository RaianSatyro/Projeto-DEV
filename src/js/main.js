import { subfofoq } from './firebase/app.js'

const nome = document.querySelector('#form-nome');
const sobrenome = document.querySelector('#form-sobrenome');
const email = document.querySelector('#form-email');
const password = document.querySelector('#form-senha');
const botao = document.querySelector('#btn-criarConta');    


botao.addEventListener('click', async function(){
    console.log('clicou')
    const subscription = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        password: password.value
    }    

    const subscriptionId = await subfofoq(subscription);
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    nome.value = '';
    sobrenome.value = '';
    email.value = '';
    password.value = '';
})