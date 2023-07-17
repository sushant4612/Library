window.onload = function() {
    display(); // Call the display function when the page loads
};

let myLibrary = [];

// Constructor declaration
function Book(title, author, pages, isRead, comments) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.comments = comments;
}


// Function that adds a book to myLibrary array
function addBookToLibrary(e) {
    e.preventDefault(); // Prevent the form submission
  
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let isRead = document.getElementById("read").checked;
    let comments = document.getElementById("comments").value;
    let newBook = new Book(title, author, pages, isRead, comments);
    myLibrary.push(newBook);
    display(); // Update: Call the display function to show the updated library
    closeForm();
  }

// Function to display the array
function display() {
  let container = document.getElementById("books-container");
  container.innerHTML = ""; // Clear the container

  for (let i = 0; i < myLibrary.length; i++) {
    console.log("DIsplay fuction called");
    let book = myLibrary[i];
    let card = document.createElement("div");
    card.classList.add("card");

    let title = document.createElement("h2");
    title.textContent = book.title;

    let author = document.createElement("p");
    author.textContent = "Author: " + book.author;

    let pages = document.createElement("p");
    pages.textContent = "Pages: " + book.pages;

    let isRead = document.createElement("p");
    isRead.textContent = "isRead: " + book.isRead;

    let comments = document.createElement("p");
    comments.textContent = "Comment: " + book.comments;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(isRead);
    card.appendChild(comments);

    container.appendChild(card);
  }
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
