/*
* Nella pagina HTML dovrai creare:
- Un elemento select per scegliere il film.
- Un input di tipo number per inserire il numero di biglietti desiderati.
- Un bottone con il testo "Prenota".
- Un elemento HTML in cui visualizzare l'esito della prenotazione.
- Una tabella che mostri tutti i film disponibili.
*
* */

/*
* Quando l'utente clicca sul bottone "Prenota":
1. Recupera il film e la quantità selezionati.
2. Crea e Invoca una funzione bookTickets().
3. Mostra un messaggio di conferma oppure di errore.
4. Se la prenotazione è riuscita, aggiorna la tabella senza ricaricare la pagina, mostrando il nuovo numero di posti disponibili.
*
*  RICORDA: si possono modificare direttamente gli oggetti contenuti nell'array movies (al ricaricamento della pagina torneranno allo stato originale)
* */

/*
* PARTE 3: Funzionalità aggiuntive
* Una volta completate le prime due parti, aggiungi queste funzionalità.
*
* 1. Se vengono prenotati almeno 5 biglietti contemporaneamente, applica automaticamente uno sconto del 20% sul totale. e fai apparire un elemento con scritto "Il totale da pagare è <totaleCosti>"
* 2. Se un film raggiunge zero posti disponibili, nella tabella deve comparire la scritta "SOLD OUT" al posto del numero di posti.
* 3. Inserisci un elemento HTML che mostri il numero totale di biglietti prenotati dall'apertura della pagina, che si aggiorna automaticamente ad ogni prenotazione
* */


const movies = [{
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    price: 8.50,
    availableSeats: 45
}, {
    id: 2,
    title: "Inception",
    genre: "Sci-Fi",
    price: 9.00,
    availableSeats: 30
}, {
    id: 3,
    title: "Titanic",
    genre: "Romance",
    price: 7.50,
    availableSeats: 60
}, {
    id: 4,
    title: "The Dark Knight",
    genre: "Action",
    price: 9.50,
    availableSeats: 25
}, {
    id: 5,
    title: "Avatar",
    genre: "Fantasy",
    price: 10.00,
    availableSeats: 50
}, {
    id: 6,
    title: "Gladiator",
    genre: "Action",
    price: 8.00,
    availableSeats: 35
}, {
    id: 7,
    title: "The Matrix",
    genre: "Sci-Fi",
    price: 7.00,
    availableSeats: 20
}, {
    id: 8,
    title: "Joker",
    genre: "Drama",
    price: 8.50,
    availableSeats: 15
}, {
    id: 9,
    title: "Oppenheimer",
    genre: "Drama",
    price: 10.50,
    availableSeats: 40
}, {
    id: 10,
    title: "Dune",
    genre: "Sci-Fi",
    price: 9.00,
    availableSeats: 5
}, {
    id: 11,
    title: "The Prestige",
    genre: "Thriller",
    price: 8.00,
    availableSeats: 18
}, {
    id: 12,
    title: "Whiplash",
    genre: "Drama",
    price: 7.50,
    availableSeats: 22
}, {
    id: 13,
    title: "Parasite",
    genre: "Thriller",
    price: 8.50,
    availableSeats: 28
}, {
    id: 14,
    title: "The Lion King",
    genre: "Animation",
    price: 7.00,
    availableSeats: 55
}, {
    id: 15,
    title: "Toy Story",
    genre: "Animation",
    price: 6.50,
    availableSeats: 40
}];

// RIFERIMENTI E CONTENITORI DOM //

const list = document.getElementById('listFilm')
const ticket = document.getElementById('nTicket')
const resultContainer = document.getElementById('resultBook')
const tableContainer = document.getElementById('tableDiv')
const bookBut = document.getElementById("btnBook")
const orderTicket = document.getElementById('divOrder')
const orderPrice = document.getElementById('divPrice')

let totalOrder = 0
let totalPrice = 0

// FUNZIONE MOSTRA TOTALE PRENOTAZIONI //

function totalOrderBook() {
    orderTicket.innerHTML = ""
    const orderState = document.createElement('h3')
    orderState.innerText = `Total Booked: ${totalOrder}`
    orderTicket.appendChild(orderState)
}

// FUNZIONE VISUALIZZA TOTALE DA PAGARE //

function totalOrderPay() {
    orderPrice.innerHTML = ""
    const totalOrderPrice = document.createElement('h3')
    totalOrderPrice.innerText = `Total spent: $${totalPrice}`
    orderPrice.appendChild(totalOrderPrice)
}

// FUNZIONE CALCOLA TOTALE DA PAGARE //

function calculateTotal(films, id, qt) {
    if (getQuantity() >= 5) {
        totalPrice += (films[id].price * qt) * 0.8
    }else {totalPrice += films[id].price * qt}
    
}

// FUNZIONE POPOLAMENTO MENU A TENDINA //

function populateList(films) {
    for (let i = 0; i < films.length; i++) {
        const opzione = document.createElement('option')
        opzione.value = films[i].id
        opzione.innerText = films[i].title
        list.appendChild(opzione)
    }
}

// FUNZIONE RECUPERO VALORE QUANTITA TICKET //

function getQuantity() {
    return Number(ticket.value)
}


// FUNZIONE RECUPERO ID DEL FILM SELEZIONATO //

function getId() {
    return Number(list.value)
}    

// FUNZIONE RICERCA FILM NELL'ARRAY TRAMITE ID //

function getSelectedMovie(films) {
    for (let i = 0; i < films.length; i++) {
        if (films[i].id === getId()) {
            return films[i]
    
        }
    }
    return null
}

// FUNZIONE PRENOTA TICKET //

function bookTickets(films) {
    const userMovie = getSelectedMovie(films)
    const quantity = getQuantity()
    const result = document.createElement('p')
    const totalQuantityTicket = document.createElement('h2')
    resultContainer.innerHTML = ""
    let ticketLeft = 0 
    for (let i = 0; i < films.length; i++) {
        if (userMovie.id === films[i].id) {
            if (quantity <= 0) {
                resultContainer.style["color"] = "rgb(255, 210, 60)"
                result.innerText = "Invalid quantity number!"
                resultContainer.appendChild(result)              
            }
            else if (quantity > films[i].availableSeats) {
                resultContainer.style["color"] = "red"
                result.innerText = "Sorry, the quantity selected is not available!"
                resultContainer.appendChild(result)
            }else {
                resultContainer.style["color"] = "green"
                result.innerText = "Order confirmed!"
                resultContainer.appendChild(result)
                ticketLeft = films[i].availableSeats - quantity
                films[i].availableSeats = ticketLeft
                totalOrder += quantity
                calculateTotal(films, i, quantity)
                totalOrderBook()
                totalOrderPay()
  
            }
        }
    }
}

// FUNZIONE CREAZIONE TABELLA //

function createTable(films) {
    const headings = ["Id", "Title", "Genre", "Price", "AvailableSeats"]
    const table = document.createElement('table')
    const tHead = document.createElement('thead')
    const trHead = document.createElement('tr')
    const tBody = document.createElement('tbody')

    tableContainer.appendChild(table)
    table.append(tHead, tBody)
    tHead.appendChild(trHead)
    
    for (let i=0; i < headings.length; i++) {
        const th = document.createElement('th')
        th.innerText = headings[i]
        trHead.appendChild(th)
    }
    for (let i=0; i < films.length; i++) {
        const trBody = document.createElement('tr')
        const tdId = document.createElement('td')
        const tdTitle = document.createElement('td')
        const tdGenre = document.createElement('td')
        const tdPrice = document.createElement('td')
        const tdAvailableSeats = document.createElement('td')
    

        tdId.innerText = films[i].id
        tdTitle.innerText = films[i].title
        tdGenre.innerText = films[i].genre
        tdPrice.innerText = "$" + films[i].price
        if (films[i].availableSeats === 0 ) {
            tdAvailableSeats.innerText = "Sold Out"
        }else {
            tdAvailableSeats.innerText = films[i].availableSeats
        }
        

        trBody.append(tdId, tdTitle, tdGenre, tdPrice, tdAvailableSeats)
        tBody.appendChild(trBody)
    }    
}

// FUNZIONE PER AGGIORNARE LA TABELLA //

function updateTable() {
    tableContainer.innerHTML = ""
    createTable(movies)
}

// AVVIO E CARICAMENTO DATI //

populateList(movies)
createTable(movies)
totalOrderBook()
totalOrderPay()



bookBut.addEventListener('click', () => {
        bookTickets(movies)
        updateTable()
    })
