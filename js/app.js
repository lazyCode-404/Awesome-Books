class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    } return books;
  }

  static addBooks(book) {
    const books = Book.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(id) {
    const books = Book.getBooks();

    books.forEach((book, index) => {
      if (book.id === id) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }

  static addBooksToList(book) {
    const list = document.querySelector('#books-list');

    const itemsList = document.createElement('li');

    itemsList.innerHTML = `
        <p>${book.title} by <span>${book.author}</span></p>
        <button id=${book.id} type="submit" class="remove">Remove</button>
        `;

    list.appendChild(itemsList);
  }

  static displayBooks() {
    const books = Book.getBooks();

    books.forEach((book) => Book.addBooksToList(book));
  }

  static deleteBook(target) {
    if (target.classList.contains('remove')) {
      target.parentElement.remove();
    }
  }
}

document.addEventListener('DOMContentLoaded', Book.displayBooks);

const form = document.querySelector('#books-form');

form.addEventListener('submit', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

  const book = new Book(title, author, id);

  Book.addBooksToList(book);
  Book.addBooks(book);

  form.reset();
});

document.querySelector('#books-list').addEventListener('click', (e) => {
  Book.deleteBook(e.target);

  Book.removeBook(e.target.id);
});

const addBookToList = document.getElementById('bk-List');
const openForm = document.getElementById('add-form');
const openContact = document.getElementById('open-contact');
const addNew = document.getElementById('add_books');
const bookList = document.getElementById('books-list');
const contact = document.getElementById('contact');

function showForm() {
  addNew.classList.remove('dontShow');
  bookList.classList.add('dontShow');
  contact.classList.add('dontShow');
}

function showBook() {
  bookList.classList.remove('dontShow');
  addNew.classList.add('dontShow');
  contact.classList.add('dontShow');
}

function showContact() {
  contact.classList.remove('dontShow');
  bookList.classList.add('dontShow');
  addNew.classList.add('dontShow');
}

openForm.addEventListener('click', showForm);

addBookToList.addEventListener('click', showBook);

openContact.addEventListener('click', showContact);