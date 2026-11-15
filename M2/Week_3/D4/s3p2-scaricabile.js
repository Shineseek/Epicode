// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    brand: "Logitech",
    price: 29.99,
    stock: 45,
    rating: 4.5,
    isAvailable: true,
    isOnSale: false,
    colors: ["Black", "White"],
    tags: ["wireless", "computer", "accessories"]
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    brand: "Razer",
    price: 89.99,
    stock: 12,
    rating: 4.8,
    isAvailable: true,
    isOnSale: true,
    colors: ["Black", "RGB"],
    tags: ["gaming", "keyboard"]
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Clothing",
    brand: "Nike",
    price: 119.99,
    stock: 30,
    rating: 4.6,
    isAvailable: true,
    isOnSale: false,
    colors: ["Red", "Black", "Blue"],
    tags: ["sport", "running", "shoes"]
  },
  {
    id: 4,
    name: "Smartphone",
    category: "Electronics",
    brand: "Samsung",
    price: 699.99,
    stock: 8,
    rating: 4.7,
    isAvailable: true,
    isOnSale: true,
    colors: ["Black", "Silver"],
    tags: ["phone", "technology"]
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home",
    brand: "DeLonghi",
    price: 149.99,
    stock: 0,
    rating: 4.4,
    isAvailable: false,
    isOnSale: false,
    colors: ["Black", "Silver"],
    tags: ["coffee", "kitchen"]
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Electronics",
    brand: "JBL",
    price: 79.99,
    stock: 25,
    rating: 4.5,
    isAvailable: true,
    isOnSale: true,
    colors: ["Blue", "Black"],
    tags: ["audio", "bluetooth"]
  },
  {
    id: 7,
    name: "Office Chair",
    category: "Furniture",
    brand: "IKEA",
    price: 199.99,
    stock: 15,
    rating: 4.2,
    isAvailable: true,
    isOnSale: false,
    colors: ["Black", "Grey"],
    tags: ["office", "furniture"]
  },
  {
    id: 8,
    name: "Winter Jacket",
    category: "Clothing",
    brand: "The North Face",
    price: 249.99,
    stock: 20,
    rating: 4.9,
    isAvailable: true,
    isOnSale: true,
    colors: ["Black", "Green"],
    tags: ["winter", "outdoor"]
  },
];

const tableContainer = document.querySelector(".product-table")
const tableHeadings = ["Nome", "Categoria", "Brand", "Prezzo", "Stock"]

function createTable() {
    const table = document.createElement("table")
    const thead = document.createElement("thead")
    const tr = document.createElement("tr")
    thead.appendChild(tr)
    table.appendChild(thead)

    for (let element of tableHeadings) {
        const th = document.createElement("th")
        th.innerText = element
        tr.appendChild(th)
    }
    tableContainer.appendChild(table)
    table.classList.add("products")
}

createTable()

function createTableBody() {
    const tableBody = document.createElement("tbody")
    tableBody.classList.add("products-list")
    const table = document.querySelector(".products")
    table.appendChild(tableBody)
}

createTableBody()

function populateTable() {
    const tbody = document.querySelector(".products-list")
    for (let product of products) {
        const tr = document.createElement("tr")
        const name = document.createElement("td")
        name.innerText = product.name

        const category = document.createElement("td")
        category.innerText = product.category

        const brand = document.createElement("td")
        brand.innerText = product.brand

        const price = document.createElement("td")
        price.innerText = product.price

        const stock = document.createElement("td")
        stock.innerText = product.stock

        tr.append(name, category, brand, price, stock)
        tbody.appendChild(tr)
    }
}

populateTable()

function changeTitle() {
    const titleChanged = document.querySelector("h1")
    const titleMod = "New Site Title"
    titleChanged.innerText = titleMod
}

changeTitle()

function changeBackground() {
    document.body.classList.add("bgcolor")
}

changeBackground()

function changeAdress() {
    const oldAdress = document.querySelector("footer p")
    const newAdress = "Vico della ronda snc"
    oldAdress.innerText = newAdress
} 

changeAdress()

function addClassToTableName() {
    const elements = document.querySelectorAll("tbody tr td:first-child")
    console.log(elements)
    for (const element of elements) {
        element.classList.toggle("iname")
    }
}

const btn = document.querySelector(".nameClass")
btn.addEventListener("click", addClassToTableName)

function changePricesColors() {
    const classes = ["blue", "green", "yellow", "grey"]
    const randomIndex = Math.floor(Math.random() * 3)
    const elements = document.querySelectorAll("tbody tr td:nth-child(4)")
    for (const element of elements){
        element.classList.toggle(classes[randomIndex])
    }
}

const btn2 = document.querySelector(".priceClass")
btn2.addEventListener("click", changePricesColors)