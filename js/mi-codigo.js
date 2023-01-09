//musica de fondo
const audio = document.createElement("audio");
audio.preload = "auto";
audio.src ="No Place For Straw Cowboys.ogg";
audio.play();
//obtenemos referencia a botones
const botones = document.querySelectorAll(".botones");
var contadorPuntos = 0
var numeroJugadas = 0

// definir funcion
const cuandoSeHaceClick = function (evento) {
  var resultado;
  var jugador = this.innerText;
  var numerAleatorio = Math.floor((Math.random() * (5 - 0 + 1)+0));
  var jugadas = ["piedra","tijeras","papel","piedra","tijeras","papel"];
  var maquina = jugadas[numerAleatorio];
  if ( jugador === maquina){
    resultado = "empate"
  }else if(jugador === "papel" && maquina === "tijeras"){
    resultado = "perdiste"
  }else if(jugador === "papel" && maquina === "piedra"){
    resultado = "ganaste"
  }else if(jugador === "piedra" && maquina === "tijeras"){
    resultado = "ganaste"
  }else if(jugador === "piedra" && maquina === "papel"){
    resultado = "perdiste"
  }else if(jugador === "tijeras" && maquina === "piedra"){
    resultado = "perdiste"
  }else if(jugador === "tijeras" && maquina === "papel"){
    resultado = "ganaste"
    
  }
  if (resultado === "ganaste") {
    contadorPuntos += 2
  } else if(resultado === "empate"){
    contadorPuntos ++
  }
  maquina1.innerHTML = maquina
  letreroMarquee.innerHTML = resultado
  puntos.innerHTML = contadorPuntos
  
};
//botones es un arreglo asi lo recorremos
botones.forEach(function (boton) {
boton.addEventListener("click", cuandoSeHaceClick)
});
//la id
var jugador = document.querySelector("#jugador");
var maquina1 = document.querySelector("#maquina");
var letreroMarquee = document.querySelector("#resultado");
var puntos = document.querySelector("#puntos")
//obtenemos referencia a los botones por id
const btnPapel = document.getElementById("btnPapel");
//agregar listener
btnPapel.addEventListener("click", function() {
  //aqui todo el codigo que se ejecuta cuando se hace click y el evento del click
    btnPapel.disabled = true;
    btnPapel.style.opacity = 0.7;
    btnPapel.textContent = 'pulsa nueva jugada';
    btnPiedra.disabled = true
    btnTijeras.disabled = true
    jugador.innerHTML = "papel"
});
const btnPiedra = document.getElementById("btnPiedra");

btnPiedra.addEventListener("click", function() {
    btnPiedra.disabled = true;
    btnPiedra.style.opacity = 0.7;
    btnPiedra.textContent = 'pulsa nueva jugada';
    btnPapel.disabled = true
    btnTijeras.disabled = true
    jugador.innerHTML = "piedra"
});
const btnTijeras = document.getElementById("btnTijeras");
btnTijeras.addEventListener("click", function() {
  btnTijeras.disabled = true;
  btnTijeras.style.opacity = 0.7;
  btnTijeras.textContent = "pulsa nueva jugada";
  btnPiedra.disabled = true
  btnPapel.disabled = true
  jugador.innerHTML = "tijeras"
})



function borrar() {
  
  
  jugador.innerHTML = "jugador"
  var maquina = document.querySelector("#maquina");
  maquina.innerHTML = "maquina"
  var resultado = document.querySelector("#resultado");
  resultado.innerHTML = "resultado"
  btnPiedra.disabled = false;
  btnPiedra.style = "bg-info";
  btnPiedra.textContent = 'piedra';
  btnPapel.disabled = false;
  btnPapel.style = "bg-info";
  btnPapel.textContent = 'papel';
  btnTijeras.disabled = false;
  btnTijeras.style = "bg-info";
  btnTijeras.textContent = 'tijeras';
  if (numeroJugadas >= 3 && puntos.textContent < 2) {
    btnPapel.disabled = true
    btnPiedra.disabled = true
    btnTijeras.disabled = true
  }else if(numeroJugadas >= 6 && puntos.textContent < 6 ){
    btnPapel.disabled = true
    btnPiedra.disabled = true
    btnTijeras.disabled = true
  }else if(numeroJugadas >= 10){
    btnPapel.disabled = true
    btnPiedra.disabled = true
    btnTijeras.disabled = true
    
  }
  
  if (numeroJugadas >= 9) {
    //  creamos una variable para la clave y valor ,siendo la clave las iniciales del jugador y el valor los puntos obtenidos
    var nombreIntroducido = prompt("escribe tu nombre");
    //obtenemos los valores que son los nombres de los jugadores
    
    
    
  }
  numeroJugadas++
}
var nombreIntroducido 
var puntosObtenidos = contadorPuntos // clave
var guardarDatos = localStorage.setItem(puntosObtenidos,nombreIntroducido);
var array = Object.keys(localStorage) //vemos todas las claves que hay, que coincide con los puntos obtenidos
var arrayOrdenado = array.sort(function(a,b){return a-b});//ordenamos el aray con una funcion de comparacion 
var celda1 = document.querySelector("#celda1")
var resultado1 = localStorage.getItem(arrayOrdenado[0])
celda1.innerHTML = arrayOrdenado[0] + resultado1
var celda2 = document.querySelector("#celda2")
var resultado2 = localStorage.getItem(arrayOrdenado[1])
celda2.innerHTML = arrayOrdenado[1] + resultado2
var celda3 = document.querySelector("#celda3")
var resultado3 = localStorage.getItem(arrayOrdenado[2])
celda3.innerHTML = arrayOrdenado[2]