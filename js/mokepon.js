function iniciarJuego() {
    let botonMascotaJugsador = document.getElementById("boton-mascota")
    botonMascotaJugsador.addEventListener("click" , seleccionarMascotaJugador )

window.addEventListener("load", iniciarJuego)    

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
function SeccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio (1,3)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo. innerHTML = "Hipodogue"
    }
    else if (ataqueAleatorio == 2){
        spanMascotaEnemigo. innerHTML = "Capipepo"
    }
    else {
        spanMascotaEnemigo. innerHTML = "Ratigueya"
    }
  
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)