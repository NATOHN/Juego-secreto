let nuemroSecreto = generarNumeroSecreto();

console.log(nuemroSecreto); 

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
let numeroDeUsuario = document.getElementById('valorUsuario').value;
console.log(nuemroSecreto);    
console.log(numeroDeUsuario);
console.log(numeroDeUsuario == nuemroSecreto);
return;
}

function generarNumeroSecreto() {
   return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero de 1 al 10');