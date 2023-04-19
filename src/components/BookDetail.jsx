import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookid } = useParams();

  const [bookSingle, setBookSingle] = useState({});

  const fetchBook = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/books/${bookid}`);
      const singleBook = await response.json();
      setBookSingle(singleBook);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  return (
    <div>
      <h1>Book Details</h1>

      {bookSingle.data && (
        <div>
          <h1> {bookSingle.data.id} </h1>
          <h2>{bookSingle.data.title}</h2>
          <h2>{bookSingle.data.author}</h2>
          <h2>{bookSingle.data.category}</h2>
          <h2>{bookSingle.data.description}</h2>
        </div>
      )}

      <Link to="/">Back to listin</Link>
    </div>
  );
};

export default BookDetail;

// fetch(`http://localhost:8000/api/books/${bookid}`);

// "http://localhost:8000/api/books/" + bookid;
