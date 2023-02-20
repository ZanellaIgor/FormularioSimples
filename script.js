const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passowordInput = document.querySelector("#passoword")
const jobInput = document.querySelector("#job")
const messageText = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    //verifica Campos
    if(nameInput.value === ""){
        alert("Digite seu nome")
        return
    }
    if(emailInput.value === '' || !isEmailValid(emailInput.value)){
        alert('Digite seu e-mail')
        return
    }
    if(!validatePassoword(passowordInput.value, 8)){
        alert('Senha precisa de no minimo 8 dígitos')
        return
    }
    if(jobInput.value === ''){
        alert('Verifique a situação')
        return
    }
    if(messageText.value === ''){
        alert('Digite seu nome')
        return
    }
    //se tudo estiver correto envia :)
    form.submit()
}) 

//validação de e-mail
function isEmailValid(email) {
    //regex de validação de e-mail
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}/
    )
    if (emailRegex.test(email)){
        return true
    }   
    return false
  
}

//valida senha2
function validatePassoword(passowordInput, minDigits){
    if(passowordInput.length >= minDigits){
        return true
    } 
    return false
}