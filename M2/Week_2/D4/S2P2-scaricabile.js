// Carrello e sconti particolari

/*const { AnyOfSchema } = require("firebase/ai")

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

const marco = {
  name: "Marco",
  lastName: "Rossi",
  isAmbassador: true,
}

const paul = {
  name: "Paul",
  lastName: "Flynn",
  isAmbassador: false,
}

const amy = {
  name: "Amy",
  lastName: "Reed",
  isAmbassador: false,
}

const prices = [34, 100, 2]
const shippingCost = 50
let utenteCheEffettuaLAcquisto = marco //cambia il valore qui per provare se il tuo algoritmo funziona!
let discount = 0.3
let totalPrice = 0
let finalPrice = 0

/*Somma del carrelo iniziale per tutti gli articoli presenti in prices*/
for (let i = 0; i < prices.length; i++) {
  totalPrice += prices[i]
}

/*creazione array utenti*/
let utenti = []
utenti.push(marco, paul, amy)
let indexUtente = utenti.indexOf(utenteCheEffettuaLAcquisto)

/*creazione array utenti speciali (ambassador) con la stampa degli utenti se sono ambassador oppure no*/
let utentiAmbassador = []

for (let user of utenti) {
  if (user.isAmbassador === true) {
    console.log(`${user.name} ${user.lastName} è un ambassador`)
    utentiAmbassador.push(user)
  }else {console.log(`${user.name} ${user.lastName} non è un ambassador`)}
  
}

/*calcolo del costo totale in vase a se è ambassador e se supera 100€ di spesa*/
if (utenteCheEffettuaLAcquisto.isAmbassador === true) {
  finalPrice = totalPrice - (totalPrice * discount)
  if (finalPrice > 100) {
    console.log(`Il costo totale dell'ordine è di €${finalPrice} con lo sconto del ${discount * 100}%, le spese di spedizione sono gratuite`)
  }else {console.log(`Le spese di spedizione sono €${shippingCost},il costo totale dell'ordine è di €${finalPrice + shippingCost}, con lo sconto del ${discount * 100}%`)}
}else {
  finalPrice = totalPrice
  if (finalPrice > 100) {
    console.log(`Il costo totale dell'ordine è di €${finalPrice}, le spese di spedizione sono gratuite`)
  }else {console.log(`Le spese di spedizione sono €${shippingCost},il costo totale dell'ordine è di €${finalPrice + shippingCost}`)}
}