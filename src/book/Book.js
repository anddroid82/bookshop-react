import { useRef, useState, useEffect } from 'react';
import './Book.css'
import { Button, Modal } from 'react-bootstrap';
import { Form, FloatingLabel, Card } from 'react-bootstrap';
import axios from 'axios';

function Book({ book, updateBooksList }) {

    const [show, setShow] = useState(false);
    const newTitleRef = useRef();
    const newSummaryRef = useRef();
    const newISBNRef = useRef();
    const newPriceRef = useRef();
    const showModal = () => { setShow(true) }
    const handleClose = () => {
        setShow(false)
    }

    const [allAuthors, setAllAuthors] = useState([]);

    const [newAuthors, setNewAuthors] = useState([]);

    const priceFormat = (e) => {
        newPriceRef.current.value = e.target.value.replace(/[^0-9]/g, '');
    }

    const save = (event) => {
        const modData = new FormData();
        modData.append('title', newTitleRef.current.value);
        modData.append('summary', newSummaryRef.current.value);
        modData.append('isbn', newISBNRef.current.value);
        modData.append('price', newPriceRef.current.value);
        axios.post('shop/book/' + book.id + '/mod', modData)
            .then((resp) => {
                updateBooksList();
            })
            .catch(err => {
                console.log(err);
            });
        setShow(false);
    }

    const loadAuthors = () => {
        axios.get('shop/author')
            .then(resp => {
                setAllAuthors(resp.data);
                console.log(allAuthors);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Card className='book'>
            <Card.Img variant="top" src={book.image} className='bookcover' />
            <Card.Body className='d-flex flex-column'>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Text><strong>ISBN: </strong>{book.isbn}</Card.Text>
                <Card.Text><strong>Szerző: </strong>{book.authors.map((e) => { return <span key={book.id + '_' + e.name}>{e.name}, </span> })}</Card.Text>
                <Card.Text><strong>Ár: </strong>{book.price}</Card.Text>
                <Button onClick={showModal} className='modButton mt-auto'><i class="bi bi-pen"></i></Button>
            </Card.Body>
            <Modal show={show} onHide={handleClose} onShow={loadAuthors}>
                <Modal.Header closeButton>
                    <Modal.Title>{book.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel
                        label="cím"
                        className="mb-3">
                        <Form.Control type="text" ref={newTitleRef} defaultValue={book.title} />
                    </FloatingLabel>
                    <FloatingLabel label='Leírás'>
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                            ref={newSummaryRef}
                            defaultValue={book.summary}
                        />
                    </FloatingLabel>
                    <FloatingLabel
                        label="ISBN"
                        className="mb-3">
                        <Form.Control type="text" ref={newISBNRef} defaultValue={book.isbn} />
                    </FloatingLabel>
                    <FloatingLabel label="szerzők">
                        <Form.Select>
                            <option>adjon hozzá új szerzőket</option>
                            {allAuthors.map(a => {
                                return <li value={a.id}>{a.name}</li>;
                            })}
                        </Form.Select>
                    </FloatingLabel>
                    <FloatingLabel
                        label="ár"
                        className="mb-3">
                        <Form.Control type="text" ref={newPriceRef} defaultValue={book.price} onChange={(e) => priceFormat(e)} />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Vissza
                    </Button>
                    <Button variant="primary" onClick={save}>
                        Módosítás
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    );
}

export default Book;