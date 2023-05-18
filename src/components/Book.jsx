import React from "react";
import { FaBook } from "react-icons/fa";

const Book = ({
  id,
  title,
  author,
  category,
  description,
  LoadBookDetail,
  RemoveBook,
  EditBook,
}) => {
  return (
    <article className="book">
      <ul>
        <li key={id}>
          <div className="book-icon">
            <FaBook />
          </div>
          <h2 className="book--title">{title}</h2>
          <p className="book--author">{author}</p>
          <p className="book--category">{category}</p>
          <p className="book--description">{description}</p>
        </li>
      </ul>
      <div className="btn-container">
        <button
          className="btn btn--detail"
          type="button"
          onClick={() => {
            LoadBookDetail(id);
          }}
        >
          Detail
        </button>

        <button
          className="btn btn--edit"
          type="button"
          onClick={() => {
            EditBook(id);
          }}
        >
          Edit
        </button>

        <button
          className="btn btn--delete"
          type="button"
          onClick={() => {
            RemoveBook(id);
          }}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default Book;
