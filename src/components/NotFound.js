import React from 'react';
import { Alert, Container } from 'react-bootstrap';

function NotFound(props) {
    return (
        <Container className='mt-3'>
            <Alert variant='danger'>Nincs ilyen oldal!</Alert>
        </Container>
    );
}

export default NotFound;