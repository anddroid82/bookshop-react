import axios from "axios";

export const setAuthToken = (token) => {
    if (token) {
        localStorage.setItem('token',token);
        console.log('set');
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }else{
        localStorage.removeItem('token');
        console.log('delete');
        delete axios.defaults.headers.common["Authorization"];
    }   
}

export const getAuthToken = () => {
    const token = localStorage.getItem('token');
    //console.log(token);
    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
    return token;
}