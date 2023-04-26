import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookid } = useParams();

  const [bookSingle, setBookSingle] = useState({});

  const fetchBook = async () => {
    try {
      const response = await fetch(
        `https://mi-linux.wlv.ac.uk/~2236664/crud-book-api/public/api/books/${bookid}`
      );
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
          <h2>{bookSingle.data.title}</h2>
          <h4>{bookSingle.data.author}</h4>
          <h4>{bookSingle.data.category}</h4>
          <h4>{bookSingle.data.description}</h4>
        </div>
      )}

      <Link to="/">Back to listing</Link>
    </div>
  );
};

export default BookDetail;
