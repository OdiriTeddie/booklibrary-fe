import { Link } from "react-router-dom";
import Book from "./Book";

const Books = ({ bookData, LoadBookDetail, RemoveBook, EditBook }) => {
  return (
    <div>
      <Link to="book/create">Add New</Link>
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
  );
};

export default Books;
