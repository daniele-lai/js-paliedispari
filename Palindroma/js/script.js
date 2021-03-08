/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

// 1. Chiediamo all'utente di inserire una parola
var parola = prompt("Inserisci una parola");

//2 Creo un ciclo for per la parola da sinistra verso destra
for (var i = 0; i < parola.length; i++) {
  var parola1 = parola[i]
  console.log(parola1);
}

//Creo un ciclo for per la parola da destra verso sinistra
var parola2 = "";

for (var i = parola.length - 1; i >= 0; i--) {
  parola2 = parola[i];
  console.log(parola2);
}
