import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { setAuthToken } from '../../helpers/token';
import { TokenContext } from '../../App';

function Logout(props) {
    const {token,setContextToken} = useContext(TokenContext);
    setContextToken(null);
    return (
        <div>
            <Navigate to={'/login'}/>
        </div>
    );
}

export default Logout;