import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import './App.css';

function App() {
  // this sets the default value of posts to an empty array
  const [books, setBooks] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8080/books')
         .then((response) => response.json())
         .then((data) => {
            setBooks(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  return (
    <div className="App">
      <header className="App-header">
        {books.map((book) => {
          return (
            <div className='books-card' key={book.id}>
              <h2 className='book-title'>{book.title}</h2>
              <p className='book-description'><Avatar alt="Remy Sharp" src="./images/user.jpg" />{book.description}</p>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
