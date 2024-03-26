const nome = document.querySelector('#nome');
const sobrenome = document.querySelector('#sobrenome');
const email = document.querySelector('#form-email');
const password = document.querySelector('#form_senha');
const botao = document.querySelector('#btn_criarConta');    


function teste1(){
    console.log('clicou')
}

botao.addEventListener('click', teste1());

botao.addEventListener('click', async function(){
    console.log('clicou')
    const subscription = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        email: email.value,
        password: password.value
    }    

    const subscriptionId = await subscribeTofofoq(subscrition);
    console.log(`Inscrito com sucesso: ${subscriptionId}`)

    nome.value = '';
    sobrenome.value = '';
    email.value = '';
    password.value = '';
})