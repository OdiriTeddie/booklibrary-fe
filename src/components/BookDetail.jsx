import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaBookOpen } from "react-icons/fa";
import "./bookdetail.scss";

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
    <section className="section details-section">
      <h1>Book Details</h1>

      {bookSingle.data && (
        <div className="book-details">
          <div className="book-icon">
            <FaBookOpen />
          </div>
          <h2>{bookSingle.data.title}</h2>
          <p>{bookSingle.data.author}</p>
          <p className="book--category">{bookSingle.data.category}</p>
          <p className="detail-description">{bookSingle.data.description}</p>
        </div>
      )}

      <Link className="btn btn--link" to="/">
        Back to listing
      </Link>
    </section>
  );
};

export default BookDetail;
