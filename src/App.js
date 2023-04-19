import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import BookCreate from "./components/BookCreate";
import BookEdit from "./components/BookEdit";
import BookDetail from "./components/BookDetail";

function App() {

  const [bookData, setBookData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/books')
      .then(response => response.json())
      .then(data => setBookData(data))
      .catch(error => setError(error));
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/book/create" element={<BookCreate />}></Route>
        <Route path="/book/edit/:bookid" element={<BookEdit />}></Route>
        <Route path="/book/detail/:bookid" element={<BookDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
