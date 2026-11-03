/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/
/*
const { use } = require("react")

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let number1 = 10
let number2 = 40
let total = 0

function crazySum(num1, num2) {
    let result = 0
    let nInt1 = parseInt(num1)
    let nInt2 = parseInt(num2)
    if (nInt1 === nInt2) {
        result = (nInt1 + nInt2) * 3
    }else {result = nInt1 + nInt2}
    return result
}

total = crazySum(number1, number2)
console.log(total)
*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let numero = 400

function boundary(numb) {
    let risposta
    if (numb >= 20 && numb <= 100 || numb === 400) {
        risposta = true
    }else {risposta = false}
    return risposta
}

let answer = boundary(numero)
console.log(answer)
*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let stringUser = "GIUSEPPE"

function reverseString(string) {
    let splitString = string.split("")
    let reverseString = splitString.reverse()
    let joinString = reverseString.join("")
    return joinString
}

let stringUserReversed = reverseString(stringUser)

console.log(stringUserReversed)
*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let wordUser = "matteo"

function upperFirst(word) {
    let firstCahr = word.charAt(0).toUpperCase()
    let restWord = word.slice(1)
    let rewriteWord = firstCahr + restWord
    return rewriteWord
}

let userWordUpper = upperFirst(wordUser)

console.log(userWordUpper)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numberLenthArray = 5
const rangeNum = 10

function giveMeRandom(n, range) {
    let randomNumber = []
    for (let i = 0; i < n; i++) {
        let numb = Math.floor(Math.random() * range )
        randomNumber.push(numb)
    }
    return randomNumber
}

console.log(giveMeRandom(numberLenthArray, rangeNum))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let side1 = 10
let side2 = 40

function area(l1, l2) {
    let surfaceArea = l1 * l2
    return surfaceArea
}

let areaClaculate = area(side1, side2)
console.log(areaClaculate)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let xNum = 20
const yNum = 19

function crazyDiff(x, y) {
    let difference = x - y
    let result = 0
    if (difference > y) {
        result = difference * 3
    }else {result = difference}
    return result
}

let risultato = crazyDiff(xNum, yNum)
console.log(risultato)

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let userText = "test"

function codify(words) {
    let textOut
    if (words.includes("code")) {
        textOut = words.slice(4)
    }else {textOut = "code" + words}
    return textOut
}

let userOutput = codify(userText)
console.log(userOutput)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let numberToCheck = 9

function check3and7(positivenumb) {
    if (positivenumb % 3 === 0 || positivenumb % 7 === 0) {
        return true
    }else {return false}
}

let valoreVerificato = check3and7(numberToCheck)
console.log(valoreVerificato)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let userChoice = "proviamo"

function cutString(wordCut) {
    let wordLength = wordCut.length
    let cuttedWord = wordCut.slice(1, wordLength - 1)
    return cuttedWord
}

let outputChoice = cutString(userChoice)
console.log(outputChoice)