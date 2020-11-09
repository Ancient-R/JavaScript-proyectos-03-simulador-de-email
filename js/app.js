const campoEmail = document.getElementById('email')
const campoAsunto = document.getElementById('asunto')
const campoMensaje = document.getElementById('mensaje')
const botonEnviar = document.getElementById('enviar')
const formulario = document.getElementById('enviar-mail')

const validaciones = {
    email: false,
    asunto: false,
    mensaje: false
}

//Expresiones regulares para validar los campos
    //Valida los campos de texto, como el asunto y el mensaje
const regEx = /[a-zA-Z0-9]/

    //Expresión regular que valida el email
const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


//Funciones

    //Deshabilita el botón al cargar la página
const inicioApp = () =>{    
    botonEnviar.disabled = true
}

    //Valida que los campos no esten vacíos
const validarCampo = (e) =>{

    //Validamos los campos con expresiones regulares
    validarCaracteres(e.target)

    if(validaciones.email === true && validaciones.asunto === true && validaciones.mensaje === true) botonEnviar.disabled = false
}
const validarCaracteres = (campo) =>{
    if (campo.id === 'asunto') {
        if (regEx.test(campo.value) && campo.value.trim().length > 0) {
            campo.style.borderBottomColor = 'green'
            campo.classList.remove('error')
            validaciones.asunto = true

        } else {
            campo.style.borderBottomColor = 'red'
            campo.classList.add('error')
        }
    }
    if (campo.id === 'mensaje') {
        if (regEx.test(campo.value) && campo.value.trim().length > 0) {
            campo.style.borderBottomColor = 'green'
            campo.classList.remove('error')
            validaciones.mensaje = true

        } else {
            campo.style.borderBottomColor = 'red'
            campo.classList.add('error')
        }
    }

    if(campo.id === 'email'){
        if (emailRegex.test(campo.value) && campo.value.trim().length > 0) {
            campo.style.borderBottomColor = 'green'
            campo.classList.remove('error')
            validaciones.email = true
        } else {
            campo.style.borderBottomColor = 'red'
            campo.classList.add('error')
        }
    }
}

    //Botón enviar

const enviarEmail = (e) =>{
    e.preventDefault()
    const fragment = document.createDocumentFragment()

    const spinnerGif = document.querySelector('#spinner')
    spinnerGif.style.display = 'block'

    //Creamos la imagen de envio exitoso
    const enviado = document.createElement('img')
    enviado.setAttribute('src', 'assets/img/mail.gif')
    enviado.style.display = 'block'
    fragment.appendChild(enviado)

    //Oculta el Spinner de enviando
    setTimeout(() => {
        spinnerGif.style.display = 'none'
        document.querySelector('#loaders').appendChild(fragment)

        setTimeout(() => {
            enviado.style.display = 'none'
            formulario.reset()
        }, 4000);
    }, 3000);
}
//--------------------------------------------------------------------------------------------------------------------------
//EventListener

const eventListener = () =>{
    //Deshabilitar el botón
    addEventListener('DOMContentLoaded', inicioApp)

    //Campos de formulario
    campoEmail.addEventListener('blur', validarCampo)
    campoAsunto.addEventListener('blur', validarCampo)
    campoMensaje.addEventListener('blur', validarCampo)

    botonEnviar.addEventListener('click', enviarEmail)
    
}

eventListener()