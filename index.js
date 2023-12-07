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

// Functions:

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

function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

newBookBtn.addEventListener("click");

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
  

  function showLibrary() {
  const test = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = book1.title;
  title.classList.add("title");
  test.appendChild(title);
  test.classList.add("newBookEntry");
  libraryTable.appendChild(test);
}
  */
