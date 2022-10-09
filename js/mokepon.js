// variables globales
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

// iniciar juego

function iniciarJuego() {
    // variables
    let botonMascotaJugsador = document.getElementById("boton-mascota")
    botonMascotaJugsador.addEventListener("click", seleccionarMascotaJugador)

    //eventos

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-Agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}

// funciones para mascotas

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodogue"
    }

    else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    }

    else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    }

    else {
        alert("Selecciona una mascota")
    }

    SeccionarMascotaEnemigo()
}

function SeccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = "Hipodogue"
    }
    else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = "Capipepo"
    }
    else {
        spanMascotaEnemigo.innerHTML = "Ratigueya"
    }

}
// funciones para ataques

function ataqueFuego() {
    ataqueJugador = "Fuego"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Agua"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra"
    ataqueAleatorioEnemigo()
}
    // ataque aleatorio enemigo

function ataqueAleatorioEnemigo() {
    ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "fuego"
    }
    else if (ataqueEnemigo == 2) {
        ataqueEnemigo = "Agua"
    }
    else {
        ataqueEnemigo = "Tierra"
    }
    combate()
    
    }
    // COMBATE

    function combate() {
        let spamVidasJugador = document.getElementById("vidas-jugador")
        let spamVidasEnemigo = document.getElementById("vidas-enemigo")

     if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    }
    else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
         crearMensaje("GANASTE")
         vidasEnemigo--
         spamVidasEnemigo. innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spamVidasEnemigo. innerHTML = vidasEnemigo
    }
    else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
        crearMensaje("GANASTE")
        vidasEnemigo--
         spamVidasEnemigo. innerHTML = vidasEnemigo
        }
    else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spamVidasJugador. innerHTML = vidasJugador
    
    }

    revisarVidas()

}

function revisarVidas () {
    if (vidasEnemigo == 0) {
        crearMensajeFinal ("FELICITACIONES! Ganaste :)") 
    }
    else if (vidasJugador == 0) {
        crearMensajeFinal ("Lo siento perdiste :(")
    }
}

// funciones para mensajes

function crearMensaje(resultado){
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = " Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " " + resultado
      
    sectionMensajes.appendChild(parrafo) 
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = resultadoFinal
      
    sectionMensajes.appendChild(parrafo) 
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
    // otra manera de llamar al scropt despues de que se carguen todo el html.
    // la funcion inicisr fuego se carga cuando todo el contenido este cargado.
