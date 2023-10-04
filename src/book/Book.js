import { useRef, useState } from 'react';
import './Book.css'

function Book({ book }) {

    const [edited, setEdited] = useState(false);
    const inputRef = useRef(null);
    const [newPrice,setNewPrice]=useState(book.price);

    const save = (event) => {
        console.log(newPrice);
    }

    return (
        <div className="card book">
            <img className="card-img-top bookcover" src={book.image} alt={book.title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.summary}</p>
                <p className="card-text"><strong>Szerző: </strong>{book.authors[0].name}</p>
                <div className='mt-auto'>
                    <div>
                        {edited ?
                            (<div className="input-group priceControl">
                                <input type="text" className="form-control" value={newPrice} pattern="[0-9]" onChange={(e)=>setNewPrice(e.target.value.replace(/[^0-9]/g, ''))} />
                                <div className="input-group-append">
                                    <i className="bi bi-arrow-counterclockwise" onClick={()=>{setEdited(!edited);setNewPrice(edited?book.price:newPrice)}}></i>
                                    <i className="bi bi-check" onClick={(event)=>{setEdited(!edited);save(event)}}></i>
                                </div>
                            </div>) :
                            (<><strong>Ár: </strong><span>{book.price} <i className="bi bi-pen" onClick={() => setEdited(!edited)}></i></span></>)}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Book;