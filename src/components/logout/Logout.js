import React from 'react';
import { Navigate } from 'react-router-dom';
import { setAuthToken } from '../../helpers/token';

function Logout(props) {
    setAuthToken(null);
    return (
        <div>
            <Navigate to={'/login'}/>
        </div>
    );
}

export default Logout;