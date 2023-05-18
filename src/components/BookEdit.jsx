import React, { useEffect, useState } from "react";
import { FaBookOpen } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";

const BookEdit = () => {
  const [bookSingle, setBookSingle] = useState({});

  const fetchBook = async () => {
    try {
      const response = await fetch(
        `https://mi-linux.wlv.ac.uk/~2236664/crud-book-api/public/api/books/${bookid}`
      );
      const singleBook = await response.json();

      setId(singleBook.data.id);
      setTitle(singleBook.data.title);
      setAuthor(singleBook.data.author);
      setCategory(singleBook.data.category);
      setDescription(singleBook.data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBook();
  }, []);

  const { bookid } = useParams();

  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookData = { id, title, author, category, description };

    const createBook = async () => {
      try {
        const response = await fetch(
          `https://mi-linux.wlv.ac.uk/~2236664/crud-book-api/public/api/books/${bookid}?_method=patch`,
          {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(bookData),
          }
        );
        alert("Saved succesfully");
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    };
    createBook();
  };

  return (
    <section className="create-form">
      <h1 className="create-title">
        Update Book <FaBookOpen />
      </h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="formgroup">
          <label htmlFor="id">ID</label>
          <input
            type="text"
            id="id"
            disabled="disabled"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            placeholder="Book Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            placeholder="Book Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>

        <div className="formgroup">
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            id="description"
            value={description}
            placeholder="Book Description"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="formgroup form-btn">
          <button className="btn" type="submit">
            Save
          </button>
          <Link className="btn btn--link" to="/">
            Back
          </Link>
        </div>
      </form>
    </section>
  );
};

export default BookEdit;
