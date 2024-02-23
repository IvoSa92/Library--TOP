let myLibrary = [];

//DOM OBJECTS:

const libraryTable = document.querySelector(".library-table");
const newBookBtn = document.querySelector(".new-book-button");
const bookInputForm = document.querySelector(".book-input-form");
const titleInput = document.querySelector("#book-title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const submitBtn = document.querySelector("#submit");
const readStatusCheckbox = document.querySelector("#read-status");
const overlay = document.querySelector(".overlay");

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
//function to add new book to the library array
function addBookToLibrary(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  myLibrary.push(book);
}

//new book form function
newBookBtn.addEventListener("click", () => {
  bookInputForm.style.display = "flex";
  document.querySelector(".overlay").style.display = "block";
});

//submit button functions
bookInputForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value;
  const author = authorInput.value;
  const pages = pagesInput.value;
  const status = readStatusCheckbox.checked ? true : false;

  addBookToLibrary(title, author, pages, status);
  document.querySelector(".overlay").style.display = "none";
  bookInputForm.reset();
  bookInputForm.style.display = "none";
  showLibrary();
});

//function for displaying the books

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

    showTitle.textContent = myLibrary[i].title;
    showTitle.classList.add("title");

    showAuthor.textContent = myLibrary[i].author;
    showAuthor.classList.add("author");

    showPages.textContent = myLibrary[i].pages + " Pages";
    showPages.classList.add("pages");

    showReadingStatusText.textContent = "Book read?";
    showReadingStatus.appendChild(showReadingStatusText);

    showCheckbox.addEventListener("change", () => {
      myLibrary[i].status = showCheckbox.checked;
    });

    showCheckbox.type = "checkbox";
    showCheckbox.checked = myLibrary[i].status === true;
    showReadingStatus.appendChild(showCheckbox);
    showReadingStatus.classList.add("reading-status-div");

    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      myLibrary.splice(i, 1);
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

// Function to click anywhere outside of the form so the form disappears

overlay.addEventListener("click", () => {
  bookInputForm.style.display = "none";
  overlay.style.display = "none";
});
