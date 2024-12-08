
import {updateBook} from "./api";
import {hightEditModal, getEditFormValues} from "./dom";

const apiUrl = 'http://localhost:3000';


async function getBooks (){
    const response = await fetch(`${apiUrl}/books`);
     const books = await response.json();
     renderBooks(books);
}

async function deleteBook (bookId){
    const response = await fetch(`${apiUrl}/books/${bookId}`, {
        method: 'DELETE'
    } );
    await getBooks();
}



async function addBook(e){
    e.preventDefault();

    const bookName = document.querySelector('#bookName').value;
    const author = document.querySelector('#author').value;
    const year = document.querySelector('#year').value;

    await fetch(`${apiUrl}/books`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            bookName,
            author,
            year,
        }),
    });
    await getBooks();
    document.querySelector('#addBookForm').reset();
}

async function editBook(event){
    event.preventDefault();
   try{
       const {id, bookName, author, year,} = getEditFormValues();

       const updateData = {bookName, author, year };

       await updateBook(id, updateData);

       hightEditModal();

       await getBooks();
   }catch (error){
       console.error('Failed to edit book', error);
   }
    document.getElementById('editForm').addEventListener('submit', editBook);

}

function renderBooks(books){
    const booksList = document.querySelector('#booksList');
    booksList.innerHTML = '';
    books.forEach(book=>{
        const bookItem = document.createElement('div');
        bookItem.className = 'book-item';
        bookItem.innerHTML = `
        
        <span>${book.bookName} by ${book.author} (${book.year})</span>
        <div>
        <button class="edit" onclick="openEditModal(${book.id},'${book.bookName}', '${book.author}', ${book.year})">Редагування</button>
        <button onclick="deleteBook(${book.id})" >Видалити</button>
</div>`
        booksList.appendChild(bookItem);
    });
}

function openEditModal(id, bookName, author, year){
    document.getElementById('editModal').classList.remove('hidden');
    document.getElementById('editId').value = id;
    document.getElementById('editTitle').value = bookName;
    document.getElementById('editAuthor').value = author;
    document.getElementById('editYear').value = year;
}

document.getElementById('cancelEdit').addEventListener('click', ()=>{
    document.getElementById('editModal').classList.add('hidden');
})
document.querySelector('#addBookForm').addEventListener('submit', addBook)
document.querySelector('#editBookForm').addEventListener('submit', editBook)
