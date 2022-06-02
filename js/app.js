const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const btnAdd = document.querySelector('#add-btn');
const booklist = document.querySelector('#book-list');
const savedData = localStorage.getItem('savedInputs');

let books = [];
if (savedData && savedData !== null) {
  books = JSON.parse(savedData);
}

const showData = () => {
  booklist.innerHTML = '';
  books.forEach((value, index) => {
    booklist.innerHTML += `
  <div>
  <ul>
  <li>${value.title}</li>
  <li>${value.author}</li>
  </ul>
  <button id="delete" onclick="deleteBook(${index});">remove</button>
  <hr>
  </div>`;
  });
};

showData();

const saveData = () => localStorage.setItem('savedInputs', JSON.stringify(books));

const deleteBook = (index) => {
  if (index !== null && index !== undefined) {
    books.splice(index, 1);
    saveData();
    // location.reload();
    showData();
  }
};

deleteBook();

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  const addData = {
    title: titleInput.value,
    author: authorInput.value,
  };

  books.push(addData);
  saveData();
  // location.reload();
  showData();
});
