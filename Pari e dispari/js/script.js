/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.*/

//L'utente sceglie pari o dispari
var pariDispari = prompt("Scegli se pari o dispari");

// //L'utente inserisce un numero da 1 a 5
var numeroUtente = parseInt(prompt("Ora scegli un numero da uno a cinque"));

//Generiamo un numero random da 1 a 5 usando una funzione
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var numeroCpu = getRandomNumber(1, 5);

//Sommiamo i due numeri
var somma = numeroUtente + numeroCpu;

//Stabiliamo se la somma è pari o dispari
function oddOrEven(num) {
  if (num % 2 == 0) {
    return "pari";
  } else {
    return "dispari";
  }
}

var morra = oddOrEven(somma);

//Dichiariamo chi ha vinto
if (pariDispari.toLowerCase() == morra) {
  console.log("Hai vinto! Il numero è " + somma);
} else {
  console.log("Hai perso, il numero era " + somma);
}
