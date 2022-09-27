let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonMascotaJugsador = document.getElementById("boton-mascota")
    botonMascotaJugsador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-Agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}



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
}



function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)
    // otra manera de llamar al scropt despues de que se carguen todo el html.
    // la funcion inicisr fuego se carga cuando todo el contenido este cargado.
