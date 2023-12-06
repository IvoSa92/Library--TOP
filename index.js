const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return this.readStatus === "yes"
      ? "I have already read this book!"
      : "I´havent read this book yet!";
  };
}

let book1 = new Book("Ivo", "sauter", 220, "yes");
let book2 = new Book("Miriam", "Rossig", 110, "yes");
let book3 = new Book("Nadia", "Sauter", 300, "no");

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
  }*/
