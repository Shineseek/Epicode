// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

const twitter = document.querySelector("aside div:last-child ol li:nth-child(2)")
console.log(twitter)
twitter.remove()


// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".

const linkArray = document.querySelectorAll(".stretched-link")
console.log(linkArray)

function deleteParent() {
    for (let link of linkArray) {
        link.addEventListener("click", () => {
            link.parentElement.parentElement.remove()
        })
    }
}

deleteParent()

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

const autorListAlert = document.querySelectorAll(".blog-post-meta a")
console.log(autorAlert)

function alertAutor() {
    for (let autor of autorListAlert) {
        autor.addEventListener("mouseover", () => {
            alert("L'autore del post è" + autorListAlert[autor])
        })
    }
}

alertAutor()