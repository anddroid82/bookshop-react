import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getAuthToken } from './token';

const RouteGuard = () => {
    const hasToken = getAuthToken() ? true : false;
    return (
        hasToken ?
            <Outlet />
            :
            <Navigate to={'/login'} />
    );
};

export default RouteGuard;