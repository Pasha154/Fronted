const express = require('express');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

let books = [];

app.get('/books', (req, res)=>{
   res.json(books);
});

app.post('/books', (req, res)=> {
   books.push({...req.body, id: books.length + 1});
   const newBook = {...req.body, id: books.length + 1};

   res.status(200).json(newBook);
});

app.put('/books/:id', (req, res)=> {
   const {id} = req.params;
   const {bookName, author, year} = req.body;

   const book = books.find(book => book.id === parseInt(id))

   if (!book){
      res.status(404).json({message: 'Книгу не знайдено'});
   }else {
      book.bookName = bookName || book.bookName;
      book.author = author || book.author;
      book.year = year || book.year;
      res.status(200).json(book);
   }
});

app.delete('/books/:id', (req, res)=> {
   const {id} = req.params;
   const {bookName, author, year} = req.body;

   const bookIndex = books.findIndex(book => book.id === parseInt(id))

   if (bookIndex === -1){
      res.status(404).json({message: 'Книгу не знайдено'});
   }else {

      books.splice(bookIndex, 1);

      res.status(200).json({message: 'Книга видалена!'});
   }
});



app.listen(PORT, ()=>{
   console.log('Server Started');
});