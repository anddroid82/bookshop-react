import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { getAuthToken, setAuthToken } from '../../helpers/token';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../../App';

function Login() {
    const {token,setContextToken} = useContext(TokenContext);
    const username = useRef();
    const password = useRef();
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const login = (e) => {
        e.preventDefault();
        axios.post('/shop/login', { username: username.current.value, password: password.current.value })
            .then(resp => {
                setContextToken(resp.data);
                navigate('/');
            })
            .catch(resp => {
                console.log(resp);
                setShow(true);
            });
    }
    useEffect(()=>{
        const token = getAuthToken();
        if (token) {
            navigate('/');
        }
    },[]);
    return (
        <>
            <Form onSubmit={e => login(e)}>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                    <Form.Label>felhasználónév</Form.Label>
                    <Form.Control type="text" ref={username} />
                </Form.Group>
                <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
                    <Form.Label>jelszó</Form.Label>
                    <Form.Control type="password" ref={password} />
                </Form.Group>
                <Button type='submit' className='btn btn-primary'>Belépés</Button>
            </Form>
            <ToastContainer position='middle-center'>
                <Toast show={show} onClose={() => { setShow(false) }}>
                    <Toast.Header>
                        <strong className="me-auto">Hiba</strong>
                    </Toast.Header>
                    <Toast.Body>nem megfelelő felhasználónév vagy jelszó!</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default Login;