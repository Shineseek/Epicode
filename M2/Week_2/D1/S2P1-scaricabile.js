//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const num1 = parseInt(prompt("Scrivi il primo numero: "));
const num2 = parseInt(prompt("scrivi il secdondo numero: "));

if (num1 > num2) {
  console.log(`il numero piu grande è il primo ${num1}`)
}else if (num1 === num2) {
  console.log(`I due numeri inseriti sono uguali`)
}else if (num1 < num2) {
  console.log(`il numero piu grande è il secondo ${num2}`)
}else{
  console.log("Il numero inserito non è valido")
}

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numUser = parseInt(prompt("Scrivi un numero: "))

if (numUser < 5) {
  console.log("Tiny")
}else if (numUser >=5 && numUser < 10) {
  console.log("Small")
}else if (numUser >=10 && numUser < 15) {
  console.log("Medium")
}else if (numUser >=15 && numUser < 20) {
  console.log("Large")
}else if (numUser >=20) {
  console.log("Huge")
}else {console.log("Il numero inserito non è valido")}


//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let n = 0; n <= 10; n++) {
  if (n === 3 || n === 8) {
    continue
  }
  console.log(n);
}

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

for (let i = 0; i < 15; i++) {
  if (i % 2 === 0) {
    console.log(`Il numero ${i} è pari`)
  }else {
    console.log(`Il numero ${i} è dispari`)
  }
  
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const userNum = parseInt(prompt("Inserisci il primo nummero: "))
const userNum2 = parseInt(prompt("Inserisci il secondo nummero: "))

if (userNum === 8 || userNum2 === 8) {
  console.log("O il numero 1 o il numero 2 hanno il valore 8")
}else if (userNum + userNum2 === 8 || userNum - userNum2 === 8) {
  console.log("Addizione o sottrazione hanno il valore 8")
} 

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = parseFloat(prompt("Inserisci il saldo totale del carrello: "))
let checkout

if (totalShoppingCart > 50) {
  checkout = totalShoppingCart
  console.log(`Avendo superato i €50 di acquisti, le spese di spedizione sono gratuite, il totale del tuo carrello per procedere al checkout è  di €${checkout}`)
}else if (totalShoppingCart <=50) {
  checkout = totalShoppingCart + 10
  console.log(`Non avendo superato i €50 di acquisti, le spese di spedizione sono €10, il totale del tuo carrello per procedere al checkout è  di €${checkout}, `)
} else {
  console.log("Il valore inserito non è valido")
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart1 = parseFloat(prompt("Inserisci il saldo totale del carrello: ")) * 0.8
let checkout1 = totalShoppingCart1

if (totalShoppingCart1 > 50) {
  checkout1 = totalShoppingCart1 
  console.log(`Oggi è il Black Friday e viene applicato il 20% su ogni prodotto, avendo superato i €50 di acquisti, le spese di spedizione sono gratuite, il totale del tuo carrello per procedere al checkout è  di €${checkout1}`)
}else if (totalShoppingCart1 <=50) {
  checkout1 = totalShoppingCart1 + 10
  console.log(`Oggi è il Black Friday e viene applicato il 20% su ogni prodotto, e non avendo superato i €50 di acquisti, le spese di spedizione sono €10, il totale del tuo carrello per procedere al checkout è  di €${checkout1}, `)
} else {
  console.log("Il valore inserito non è valido")
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const isMale = true
const result = isMale ? "male" : "female"
console.log(result)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let n1 = 1; n1 <= 100; n1++) {
  if (n1 % 5 === 0 && n1 % 3 === 0) {
  console.log("FizzBuzz")
  }else if (n1 % 3 === 0) {
  console.log("Fizz")    
  } else if (n1 % 5 === 0) {
  console.log("Fizz")
}else {console.log(n1)}
}