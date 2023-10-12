import axios from "axios";

export const setAuthToken = (token) => {
    localStorage.setItem('token',token);

    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common["Authorization"];
    }   
}

export const getAuthToken = () => localStorage.getItem('token');