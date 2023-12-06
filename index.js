const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function () {
    return this.readStatus === "yes"
      ? "I have already read this book!"
      : "I´havent read this book yet!";
  };
}

let book1 = new Book("Ivo", "sauter", 220, "yes");
