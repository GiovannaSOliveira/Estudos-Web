let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let mensagem  = document.querySelector('#mensagem')
let nomeOk = false
let emailOk = false
let mensagemOk= false

/*Tamanhos*/
nome.style.width='100%'
email.style.width='100%'
mensagem.style.width='100%'
button.style.width='100%'

/*Funções */
function validateName () {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3){
        txtNome.innerHTML = "Nome deve ter 3 caracteres ou mais"
        txtNome.style.display = 'block'
        txtNome.style.textAlign = 'end'
    } else{
        txtNome.style.display = 'none'
        nomeOk = true
    }
}

function validateEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.display = 'block'
        txtEmail.style.textAlign = 'end'
    }
    else{
        txtEmail.style.display = 'none'
        emailOk = true
    }
}

function validateAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(mensagem.value.length >= 100){
        txtAssunto.innerHTML = mensagem.value.length + " de 100"
        txtAssunto.style.display = 'block'
        txtAssunto.style.textAlign = 'end'
    }
    else{
        txtAssunto.style.display = 'none'
        mensagemOk = true
    }
}

function validateEnvio (){
    if(nomeOk == true && emailOk == true  && mensagemOk == true){
        alert('Mensagem enviada.')
    }
    else{
        alert('Preencha o formulário corretamente')
    }

}



