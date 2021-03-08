// Palindroma

// Chiedo all’utente di inserire una parola
var parola = prompt("Inserisci una parola")
// Creo una variabile che mi inverte il senso di lettura della parola scelta
var parolaAlContrario = parola.split("").reverse().join("");
// Creo una funzione per verificare se la parola inserita è palindroma
function palindroma(str) {
  if (parola == parolaAlContrario) {
    console.log(parola + " è palindroma");
  }else {
    console.log(parola + " non è palindroma");
  }
}

palindroma(parola);


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt("Scegli pari o dispari")
var numero = parseInt(prompt("Inserisci un numero da 1 a 5"))
console.log(scelta);
console.log(numero);
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var numeroRandom = random(1, 5)
console.log(numeroRandom);

// Sommiamo i due numeri

var somma = numeroRandom + numero;
console.log(somma);
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function PariDispari(num) {
  if (somma%2) {
    console.log(somma + " è dispari");
  }else {
    console.log(somma + " è pari");
  }
}

PariDispari(somma)

// Dichiariamo chi ha vinto associando la somma e la scelta dell'utente
var scelta = 0
if (scelta == somma%2) {
  console.log("Hai vinto");
}else {
  console.log("Hai perso");
}
