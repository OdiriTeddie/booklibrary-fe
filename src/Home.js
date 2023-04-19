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
            "http://localhost:8000/api/books/" + id,
            {
              method: "DELETE",
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
      const response = await fetch("http://localhost:8000/api/books");
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
    <main>
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
