import { Link } from "react-router-dom";
import Book from "./Book";

const Books = ({ bookData, LoadBookDetail, RemoveBook, EditBook }) => {
  return (
    <section className="book-section section">
      <Link className="btn btn--link" to="book/create">
        Add New
      </Link>
      <div className="book-list">
        {bookData?.data.map((book) => {
          return (
            <Book
              key={book.id}
              {...book}
              LoadBookDetail={LoadBookDetail}
              EditBook={EditBook}
              RemoveBook={RemoveBook}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Books;
