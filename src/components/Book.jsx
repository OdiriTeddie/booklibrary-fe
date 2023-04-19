import React from "react";

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
    <article>
      <img src="" alt="" />
      <ul>
        <li key={id}>
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{category}</p>
          <p>{description}</p>
        </li>
      </ul>
      <button
        type="button"
        onClick={() => {
          EditBook(id);
        }}
      >
        Edit
      </button>
      <button
        type="button"
        onClick={() => {
          RemoveBook(id);
        }}
      >
        Delete
      </button>
      <button
        type="button"
        onClick={() => {
          LoadBookDetail(id);
        }}
      >
        Detail
      </button>
    </article>
  );
};

export default Book;
