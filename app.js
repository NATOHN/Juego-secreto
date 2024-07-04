let numeroSecreto = generarNumeroSecreto();

console.log(numeroSecreto); 

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
console.log(typeof(numeroDeUsuario));
console.log(numeroSecreto);
console.log(typeof(numeroSecreto));
console.log(numeroDeUsuario);
console.log(numeroDeUsuario === numeroSecreto);
return;
}

function generarNumeroSecreto() {
   return Math.floor(Math.random()*10)+1;
}

asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un numero de 1 al 10');