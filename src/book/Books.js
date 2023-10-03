import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";
import './Book.css'

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("shop/book")
      .then((resp) => {
        let result = [];
        resp.data.forEach(b => {
          result.push(b);
        });
        setBooks(result);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="books mr-auto">
        {books.map(b => {
          return (
            <Book key={b.id} book={b} />
          )
        })}
      </div>
    </div>
  );
}

export default Books;
