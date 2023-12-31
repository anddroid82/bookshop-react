import axios from "axios";
import { useEffect, useState } from "react";
import Book from "../book/Book";
import './Books.css'

function Books() {
  const [books, setBooks] = useState([]);

  const loadBooks = () => {
    axios.get("shop/book")
      .then((resp) => {
        let result = [];
        resp.data.forEach(b => {
          result.push(b);
        });
        setBooks(result);
      })
      .catch(function (error) {
        //console.log(error);
      });
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
      <div className="books mr-auto">
        {books.map(b => {
          return (
            <Book key={b.id} book={b} updateBooksList={loadBooks} />
          )
        })}
      </div>
  );
}

export default Books;
