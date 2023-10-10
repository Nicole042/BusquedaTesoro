let ancho = 800;
let alto = 550;
let contador = 0;
let mapa = document.getElementById("mapa")
let mensajes = document.getElementById("mensajes")
let numero = document.getElementById("numero")
let tesoro = {
    x: numeroAzar(ancho),
    y: numeroAzar(alto),
}
coordenadas ()


function numeroAzar (valor) {
    return Math.random()*valor 
}

function coordenadas () {
mapa.addEventListener("click", (event)=>{
    contador++
    numero.innerText = contador
    let diferenciax = event.offsetX - tesoro.x
    let diferenciay = event.offsetY - tesoro.y
    let distancia = Math.sqrt ((diferenciax*diferenciax)+(diferenciay*diferenciay))
    enviarMensaje (distancia)
})
}

function enviarMensaje (distancia) {
if (distancia < 50) {
mensajes.innerText = "Se encontro el tesoro"

}
else if (distancia < 80){
    mensajes.innerText = "Estas cerca del tesoro"
}
else if (distancia < 100) {
    mensajes.innerText = "Estas caliente"
}
else {
    mensajes.innerText = "Estas frio"
}
}

