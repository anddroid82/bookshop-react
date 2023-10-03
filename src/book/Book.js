import './Book.css'

function Book({ book }) {
    return (
        <div className="card book">
            <img className="card-img-top" src={book.image} alt={book.title} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.summary}</p>
                <p className="card-text"><strong>Szerző: </strong>{book.authors[0].name}</p>
                <div className='mt-auto'>
                    <p><strong>Ár: </strong>{book.price}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>
    );
}

export default Book;