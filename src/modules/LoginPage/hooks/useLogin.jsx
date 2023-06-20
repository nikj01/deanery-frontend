import React, {useEffect, useState} from 'react';
import {useAuth} from "../../../context/hooks/useAuth.jsx";
import axios from "../../../api/axios_helper.jsx";

const UseLogin = () => {
    const {isAuth, personId, login} = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const changeRedirect = () => {
        setRedirect(true);
    }

    const clearError = () => {
        setError(false);
    }

    useEffect(() => {
        if (isAuth && personId)
            setTimeout(changeRedirect, 5000);
    }, [isAuth, personId]);

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await axios.post('/login',
                {username, password},
                {
                    auth: {
                        username,
                        password
                    },
                    headers: {
                        'Authorization': 'Basic ' + window.btoa(username + ':' + password),
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true
                });

            if (response.status === 200) {
                login(true, username, password);
                setRedirect(true);
            }
            if (response.status === 401) setError(true);
        } catch (error) {
            e.preventDefault();
            setError(true);
        }
    };

    return {
        username,
        setUsername,
        password,
        setPassword,
        error,
        redirect,
        clearError,
        handleSubmit
    }
};

export default UseLogin;
