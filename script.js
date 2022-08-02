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
        if (myLibrary[i].haveRead == true) {
            cardRead = document.createElement("p");
            cardRead.innerHTML = "Read";
            card.appendChild(cardRead)
        } else {
            cardRead = document.createElement("p");
            cardRead.innerHTML = "Not Read";
            card.appendChild(cardRead)
        };
        readButton = document.createElement("button");
        readButton.innerHTML = "Change read status";
        card.appendChild(readButton);
        readButton.addEventListener("click", () => {
            if (myLibrary[i].haveRead == true) {
                myLibrary[i].haveRead = false;
            } else if (myLibrary[i].haveRead == false) {
                myLibrary[i].haveRead = true;
            };
            displayLibrary();
        });
        removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove book";
        card.appendChild(removeButton);
        removeButton.addEventListener("click", () => {
            myLibrary.splice(i, 1)
            displayLibrary();
        });
    };
};

function openForm() {
    document.getElementById("theForm").style.display = "flex";
};

const formSubmit = document.getElementById("formSubmit")

formSubmit.addEventListener("click", () => {
    document.getElementById("theForm").style.display = "none";
    let submittedBook = new Book()
    submittedBook.title = document.getElementById("titleInput").value;
    submittedBook.author = document.getElementById("authorInput").value;
    submittedBook.pageNumber = document.getElementById("pageInput").value;
    submittedBook.haveRead = document.getElementById("readInput").checked;
    myLibrary.push(submittedBook);
    displayLibrary();
    document.getElementById("titleInput").value = "";
    document.getElementById("authorInput").value = "";
    document.getElementById("pageInput").value = "";
    document.getElementById("readInput").checked = false;
});