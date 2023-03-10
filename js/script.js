// Scrivi un programma che stampi in console i numeri da 1 a 100,
//  ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//  Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// :alphabet-yellow-question:**Prima di partire a scrivere codice poniamoci qualche domanda:**
// Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?

// :lampadina:**Consigli del giorno:**
//  1. Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//  2. Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// **BONUS 1:**
//  Crea un container nel DOM , aggiungendo un elemento html con il numero o la stringa corretta da mostrare.
//  **BONUS 2:**
//  Applica stili differenti agli elementi aggiunti al DOM nel *BONUS 1*, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.


// MILESTONE 1

// let fizzgame;

// for (let i = 1; i <= 100; i++) {

//   if (i % 15 === 0) {
//     fizzgame="fizzbuzz";

//   } else if (i % 5 === 0) {
//     fizzgame="buzz";

//   } else if (i % 3 === 0){
//     fizzgame="fizz";

//   } else {
//     fizzgame = i;   
//   }
//     console.log(fizzgame);
// }



// BONUS

let typeOfBox;
let coloRofBox;

const fizzgame = document.querySelector(".row")

for (let i = 1; i <= 100; i++) {

  if (i % 15 === 0) {
    typeOfBox = "FIZZBUZZ";
    coloRofBox = "red";

  } else if (i % 5 === 0) {
    typeOfBox = "BUZZ";
    coloRofBox = "yellow";

  } else if (i % 3 === 0){
    typeOfBox = "FIZZ";
    coloRofBox = "green";

  } else {
    typeOfBox = i
    coloRofBox = "blue";   
  }
    console.log(i, typeOfBox, coloRofBox);  
   fizzgame.innerHTML += `<div class="col${coloRofBox}"><span>${typeOfBox}</span></div>`;
}


