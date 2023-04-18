import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const BookEdit = () => {
  const [bookSingle, setBookSingle] = useState({});

  const fetchBook = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/books/${bookid}`);
      const singleBook = await response.json();
      //   setBookSingle(singleBook);
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
          "http://localhost:8000/api/books/" + bookid,
          {
            method: "PUT",
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
    <div>
      <div>
        <h1>Update Book</h1>
        <form onSubmit={handleSubmit}>
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

          <div className="formgroup">
            <button type="submit">Save</button>
            <Link to="/">Back</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookEdit;
