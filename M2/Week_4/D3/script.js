const schermo = document.getElementById("risultato")
console.log(schermo.value)

function immissione(dato) {
    let currValue = schermo.value
    switch(dato) {
        case "+":
        case "-":
        case "*":
        case "/":
            //controllo se ce un numero prima

            if (currValue !== "") {
                //se non è vuoto add operatore
                //controllo se cè un operatore
                if (currValue.endsWith("+") || currValue.endsWith("-") || currValue.endsWith("*") || currValue.endsWith("/")) {
                    let modValue = currValue.slice(0, -1)
                    schermo.value = modValue + dato
                //altrimenti inserisco operatore    
                }else {
                    schermo.value = currValue + dato
                }

            }else if (dato === "-") {
                schermo.value = currValue + dato
            }

            break    
        default:
            // è un numero
            schermo.value = currValue + dato
    }    
}

function resetta() {
    schermo.value = ""
}

function operazione() {
    schermo.value = eval(schermo.value)
}