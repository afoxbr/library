let myLibrary = [];

function Book(title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
};

function addToLibrary(book) {
    myLibrary.push(book);
};

const cardDisplay = document.getElementById("cardDisplay");

function displayLibrary() {
    for (let i = 0; i < myLibrary.length; i++) {
        card = document.createElement("div");
        card.setAttribute("class", "card");
        cardDisplay.appendChild(card);
        cardTitle = document.createElement("p");
        cardTitle.innerHTML = "Title: " + myLibrary[i].title;
        card.appendChild(cardTitle);
        cardAuthor = document.createElement("p");
        cardAuthor.innerHTML = "Author: " + myLibrary[i].author;
        card.appendChild(cardAuthor);
        cardPage = document.createElement("p");
        cardPage.innerHTML = "Number of pages: " + myLibrary[i].pageNumber;
        card.appendChild(cardPage);
        if (myLibrary[i].haveRead == true) {
            cardRead = document.createElement("p");
            cardRead.innerHTML = "Read";
            card.appendChild(cardRead)
        } else {
            cardRead = document.createElement("p");
            cardRead.innerHTML = "Not Read";
            card.appendChild(cardRead)
        };
    };
}