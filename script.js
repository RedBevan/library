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

// //Example book
const book1 = new Book("The Dead Man Walking", "J.R Ølsviglo", 185, "read");

// // Example book
const book2 = new Book(
  "The Theory of Everything",
  "J.D. Graveland",
  298,
  "read"
);

myLibrary.push(book1);
myLibrary.push(book2);

// This function loops through the array and displays each book on the page
const bookGrid = document.getElementById("book-grid");

function displayBooks() {
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

    let newBookReadStatus = document.createElement("p");
    newBookReadStatus.textContent = `I have ${book.readStatus} this book`;
    newBook.appendChild(newBookReadStatus);
    if ((book.readStatus = "read")) {
      newBook.setAttribute("read", "read");
      newBook.setAttribute("class", "read");
    }

    let deleteBookButton = document.createElement("button");
    deleteBookButton.innerText = "remove book";
    deleteBookButton.setAttribute("class", "deleteButton");
    deleteBookButton.setAttribute(
      "onclick",
      "return this.parentNode.remove();"
    );
    newBook.appendChild(deleteBookButton);
  }
}

displayBooks();

const addBookButton = document.getElementById("add-book-button");
const addBookForm = document.getElementById("add-book-form");

// Shows form on click
addBookButton.addEventListener("click", function () {
  addBookForm.classList.toggle("hidden");
});

const submitButton = document.getElementById("submit");

// Submit adds content to page
submitButton.addEventListener("click", createBookObject);

function createBookObject() {
  let bookTitle = document.getElementById("title").value;
  let bookAuthor = document.getElementById("author").value;
  let bookPages = document.getElementById("pages").value;
  let bookReadStatus = document.getElementById("read-status").value;

  let book = new Book(bookTitle, bookAuthor, bookPages, bookReadStatus);
  console.log(book);

  myLibrary.push(book);
  console.log(myLibrary);
  // Clear the grid so books already added are not duplicated
  bookGrid.innerText = "";
  displayBooks();
  addBookForm.classList.toggle("hidden");
  addBookForm.reset();
}
