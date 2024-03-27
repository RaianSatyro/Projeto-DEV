
function validatefield(){
    const emailValid = isEmailValid();
    document.querySelector('#recupera-senha').disablad = !emailValid;
}


function isEmailValid(){
    const email = document.querySelector('#form-email').value;
    if(!email){
        console.log('falso');
        return false;
    }
    console.log('falso');
    return validateEmail(email);
}

function validateEmail(email){
    return /\S+@\S+/.test(email);
}
