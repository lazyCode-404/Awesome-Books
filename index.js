import {DateTime} from './modules/luxon.js';
import Book from './modules/Books.js';

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
const bookList = document.getElementById('books_');
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

const dateTime = document.querySelector('#date');
const clock = () => {
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateTime.innerHTML = currentDateTime;
};
setInterval(clock, 1000);
