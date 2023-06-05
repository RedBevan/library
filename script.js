let myLibrary = [];

// Constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

//Example book
const book1 = new Book("The Dead Man Walking", "J.R Ølsviglo", 185, "read");

// Example book
const book2 = new Book(
  "The Theory of Everything",
  "J.D. Graveland",
  298,
  "read"
);

myLibrary.push(book1);
myLibrary.push(book2);

// This function loops through the array and displays each book on the page
function displayBooks() {
  const bookGrid = document.getElementById("book-grid");

  for (book of myLibrary) {
    let newBook = document.createElement("div");
    bookGrid.appendChild(newBook);
    newBook.classList.add("book");

    let newBookAuthor = document.createElement("h3");
    newBookAuthor.textContent = book.author;
    newBook.appendChild(newBookAuthor);

    let newBookTitle = document.createElement("h2");
    newBookTitle.textContent = book.title;
    newBook.appendChild(newBookTitle);

    let newBookPages = document.createElement("p");
    newBookPages.textContent = book.pages + " pages";
    newBook.appendChild(newBookPages);
  }
}

const addBookButton = document.getElementById("add-book-button");
const addBookForm = document.getElementById("add-book-form");

addBookButton.addEventListener("click", function () {
  addBookForm.classList.toggle("hidden");
});

displayBooks();

// NEXT STEP: Add form to add book button
