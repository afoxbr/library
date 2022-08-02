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
    cardDisplay.replaceChildren();
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
        if (myLibrary[i].haveRead == "yes") {
            cardRead = document.createElement("p");
            cardRead.innerHTML = "Read";
            card.appendChild(cardRead)
        } else {
            cardRead = document.createElement("p");
            cardRead.innerHTML = "Not Read";
            card.appendChild(cardRead)
        };
    };
};

function openForm() {
    document.getElementById("theForm").style.display = "block";
};

const formSubmit = document.getElementById("formSubmit")

formSubmit.addEventListener("click", () => {
    document.getElementById("theForm").style.display = "none";
    let submittedBook = new Book()
    submittedBook.title = document.getElementById("titleInput").value;
    submittedBook.author = document.getElementById("authorInput").value;
    submittedBook.pageNumber = document.getElementById("pageInput").value;
    submittedBook.haveRead = document.getElementById("readInput").value;
    myLibrary.push(submittedBook);
    displayLibrary();
})