let myLibrary = [];
const libraryTable = document.querySelector(".library-table");

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function () {
    return this.readStatus === "yes"
      ? "I have already read this book!"
      : "I´haven´t read this book yet!";
  };
}

let book1 = new Book("Ivo", "sauter", 220, "yes");
let book2 = new Book("Miriam", "Rossig", 110, "yes");
let book3 = new Book("Nadia", "Sauter", 300, "no");

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

function showLibrary() {
  const test = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = book1.title;
  title.classList.add("title");
  test.appendChild(title);
  test.classList.add("newBookEntry");
  libraryTable.appendChild(test);
}

console.log(book1, book2, book3);

/*
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
      const readStatus =
        this.read === "yes" ? "I read that book" : "I dont read that book";
      return `${title} by ${author}, ${pages} pages, ${readStatus}`;
    };
  }
  
  addBookToLibrary("aa","aa",22,"no")
  
  */
