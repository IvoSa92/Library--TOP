let myLibrary = [
  {
    title: "A Game of Thrones",
    author: "George R. R. Martin",
    pages: 694,
    read: "no",
  },
  {
    title: "Mein Kampf",
    author: "Adolf hitler",
    pages: 666,
    read: "yes",
  },
  { title: "Ein Buch halt", author: "Someone", pages: 23, read: "no" },
];

//DOM OBJECTS:

const libraryTable = document.querySelector(".library-table");
const newBookBtn = document.querySelector(".new-book-button");
const bookInputForm = document.querySelector(".book-input-form");
const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const submitBtn = document.querySelector("#submit");
const readStatusCheckbox = document.querySelector("#read-status");

// Functions:

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return this.status === "yes"
      ? "I have already read this book!"
      : "I´haven´t read this book yet!";
  };
}

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

newBookBtn.addEventListener("click", () => {
  bookInputForm.style.display = "flex";
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const status = readStatusCheckbox.checked ? "yes" : "no";

  addBookToLibrary(title, author, pages, status);
  bookInputForm.reset();
  bookInputForm.style.display = "none";
  console.log(myLibrary);
});
