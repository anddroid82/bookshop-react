function Book({book}) {
    return (
        <div class="book">
            <span class="image"><img src={book.image} /></span>
            <span class="title">{book.title}</span>
            <span class="author">{book.authors[0].name}</span>
        </div>
    );
}

export default Book;