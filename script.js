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

// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.

function displayBooks() {
  const bookGrid = document.getElementById("book-grid");

  for (book of myLibrary) {
    let newBook = document.createElement("div");
    bookGrid.appendChild(newBook);
    newBook.classList.add("book");

    let newBookTitle = document.createElement("h3");
    newBookTitle.textContent = book.title;
    newBook.appendChild(newBookTitle);

    let newBookAuthor = document.createElement("p");
    newBookAuthor.textContent = book.author;
    newBook.appendChild(newBookAuthor);

    let newBookPages = document.createElement("p");
    newBookPages.textContent = book.pages;
    newBook.appendChild(newBookPages);
  }
}

displayBooks();
