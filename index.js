import Date from './modules/time.js';
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

const showForm = () => {
  addNew.classList.remove('dontShow');
  bookList.classList.add('dontShow');
  contact.classList.add('dontShow');
};

const showBook = () => {
  bookList.classList.remove('dontShow');
  addNew.classList.add('dontShow');
  contact.classList.add('dontShow');
};

const showContact = () => {
  contact.classList.remove('dontShow');
  bookList.classList.add('dontShow');
  addNew.classList.add('dontShow');
};

openForm.addEventListener('click', showForm);

addBookToList.addEventListener('click', showBook);

openContact.addEventListener('click', showContact);

document.getElementById('date').innerHTML = Date;