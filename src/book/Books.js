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
        {books.map(b=>{
            return (
                <Book key={b.id} book={b}/>
            )
        })}
    </div>
  );
}

export default Books;
