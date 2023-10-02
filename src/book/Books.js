import axios from "axios";
import { useEffect, useState } from "react";
import Book from "./Book";

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
    <div>
        {books.length}
        {books.map(b=>{
            return (
                <div key={b.id}>{b.title}</div>
            )
        })}
    </div>
  );
}

export default Books;
