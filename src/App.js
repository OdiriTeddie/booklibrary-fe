import { useState, useEffect } from 'react';

function App() {

  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/books')
      .then(response => response.json())
      .then(data => setBookData(data))
      .catch(error => setError(error));
  }, []);


  return (
      <ul>
          {bookData?.data.map(book => (
              <li key={book.id}>
                  <h2>{book.title}</h2>   
                  <p>{book.author}</p>
                  <p>{book.category}</p>
                  <p>{book.description}</p>
              </li>
         ))}
      </ul>
  );
}

export default App;
