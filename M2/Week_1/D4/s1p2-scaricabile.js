/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*I datatype indicano il tipo di contenuto di una variabile, questi esempio elencati qui sotto sono i cosi detti tipi primitivi*/

let variabile1 = "Giuseppe" /*variabile1 esempio di una variabile di tipo "string", sequene di testo racchiuse tra apici singoli o doppi o backtick*/

let variabile2 = 123 /*variabile2 esempio di una variabile di tipo "number", numeri sia interi che decimali*/

let variabile3 = true /*variabile3 esempio di una variabile di tipo "boolean", valore logico che puo essere "true" o "false"*/

let variabile4 /*variabile4 esempio di una variabile di tipo "undefined", variabile a cui non è stato assegnato alcun valore ma è stata solo dichiarata*/

let variabile5 = null /*variabile5 esempio di una variabile di tipo "null", variabile a cui è stato intenzionalmente assegnato un valore nullo*/

let variabile6 = BigInt(123456789012345678901234567890) /*variabile6 esempio di una variabile di tipo "bigint", variabile che ha come valore un numero piu grande di quelli gestibili da number */

let variabile7 = Symbol("variabile 7") /*variabile7 esempio di una variabile di tipo "symbol", variabile a cui viene assegnato un identificatore univoco */

console.log(typeof variabile1)
console.log(typeof variabile2)
console.log(typeof variabile3)
console.log(typeof variabile4)
console.log(variabile5)
console.log(typeof variabile6)
console.log(typeof variabile7)

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*Un oggetto in javascript è una struttura di dati dove vengono memorizzate coppie chiave-valore

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = parseInt(12)
let num2 = parseInt(20)
let resultAdd = num1 + num2
console.log(resultAdd)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = parseInt(12)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Giuseppe"

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = parseInt(4)
let resultSub = x - num3
console.log(resultSub)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let name1 = "john"
let name2 = "John"
let comparation = name1 === name2
let comparationLower = name1 === name2.toLowerCase()
console.log(`Il Primo nome è uguale al secondo nome? ${comparation}`)
console.log(`Il Primo nome è uguale al secondo nome dato che entrambi sono trasformati in lowercase? ${comparationLower}`)
