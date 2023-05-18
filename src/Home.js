import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Books from "./components/Books";

function Home() {
  const [bookData, setBookData] = useState(null);
  // const [error, setError] = useState(null);

  const navigate = useNavigate();

  const LoadBookDetail = (id) => {
    navigate("/book/detail/" + id);
  };

  const EditBook = (id) => {
    navigate("/book/edit/" + id);
  };

  const RemoveBook = (id) => {
    // navigate("/book/create/" + id);
    if (window.confirm("Do you want to remove?")) {
      const createBook = async () => {
        try {
          const response = await fetch(
            `https://mi-linux.wlv.ac.uk/~2236664/crud-book-api/public/api/books/${id}?_method=delete`,
            {
              method: "POST",
            }
          );
          alert("Removed succesfully");
          window.location.reload();
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };
      createBook();
    }
  };

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        "https://mi-linux.wlv.ac.uk/~2236664/crud-book-api/public/api/books"
      );
      const books = await response.json();
      setBookData(books);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <main className="main">
      <Books
        bookData={bookData}
        LoadBookDetail={LoadBookDetail}
        EditBook={EditBook}
        RemoveBook={RemoveBook}
      />
    </main>
  );
}

export default Home;
