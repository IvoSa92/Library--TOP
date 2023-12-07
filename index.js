let myLibrary = [
  //   {
  //     title: "A Game of Thrones",
  //     author: "George R. R. Martin",
  //     pages: 694,
  //     status: true,
  //   },
  //   {
  //     title: "Mein Kampf",
  //     author: "Adolf hitler",
  //     pages: 666,
  //     status: true,
  //   },
  //   { title: "Ein Buch halt", author: "Someone", pages: 23, status: false },
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
    return this.status === "yes" ? true : false;
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
  const status = readStatusCheckbox.checked ? true : false;

  addBookToLibrary(title, author, pages, status);

  bookInputForm.reset();
  bookInputForm.style.display = "none";
  console.log(myLibrary);
  showLibrary();
});

/* 
const test = document.querySelector(".reading-status-div");
test.addEventListener("change", () => {
  if (this.checked) {
    myLibrary[0].status === true;
  } else {
    myLibrary[0].status = false;
  }
});
*/

function showLibrary() {
  libraryTable.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookContainer = document.createElement("div");
    const showTitle = document.createElement("h1");
    const showAuthor = document.createElement("h2");
    const showPages = document.createElement("p");
    const showReadingStatus = document.createElement("div");
    const showReadingStatusText = document.createElement("p");
    const showCheckbox = document.createElement("input");
    const deleteButton = document.createElement("button");
    const bookCount = i;

    showTitle.textContent = myLibrary[i].title;
    showTitle.classList.add("title");

    showAuthor.textContent = myLibrary[i].author;
    showAuthor.classList.add("author");

    showPages.textContent = myLibrary[i].pages;
    showPages.classList.add("pages");

    showReadingStatusText.textContent = myLibrary[i].status;
    showReadingStatus.appendChild(showReadingStatusText);

    showCheckbox.type = "checkbox";
    showCheckbox.checked = myLibrary[i].status === true;
    showReadingStatus.appendChild(showCheckbox);
    showReadingStatus.classList.add("reading-status-div");

    deleteButton.textContent = "Delete Book";
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(i);
      showLibrary();
    });

    bookContainer.appendChild(showTitle);
    bookContainer.appendChild(showAuthor);
    bookContainer.appendChild(showPages);
    bookContainer.appendChild(showReadingStatus);
    bookContainer.appendChild(deleteButton);
    bookContainer.classList.add("newBookEntry");

    libraryTable.appendChild(bookContainer);
  }
}
