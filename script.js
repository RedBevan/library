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
const book1 = new Book("The Dead Man Walking", "J.R Ølsviglo", 185, "yes");

// Example book
const book2 = new Book(
  "The Theory of Everything",
  "J.D. Graveland",
  298,
  "yes"
);
