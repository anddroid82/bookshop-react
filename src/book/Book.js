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
                        <strong>Ár: </strong>
                        {edited ?
                            (<div className="input-group">
                                <input type="text" className="form-control" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)} />
                                <div className="input-group-append">
                                    <i className="bi bi-arrow-counterclockwise" onClick={()=>setEdited(!edited)}></i>
                                    <i className="bi bi-check" onClick={(event)=>{setEdited(!edited);save(event)}}></i>
                                </div>
                            </div>) :
                            (<span>{book.price} <i className="bi bi-pen" onClick={() => setEdited(!edited)}></i></span>)}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Book;