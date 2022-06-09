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

  export default Book;