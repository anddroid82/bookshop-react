import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import { getAuthToken } from '../helpers/token';

function TemplateNavigation(props) {
    const token = getAuthToken();
    return (
        token?
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>Könyvek</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='justify-content-between'>
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Főoldal</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Profil" id="basic-nav-dropdown">
                        <LinkContainer to="/profil">
                                <Nav.Link>Adataim</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/logout">
                                <Nav.Link>Kilépés</Nav.Link>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        :
        <></>
    );
}

export default TemplateNavigation;