import React, {useEffect, useState} from 'react';
import axios from "../../../api/axios_helper.jsx";
import {Alert, AlertTitle, Box, Button, Container, Slide, Snackbar, TextField, Typography} from "@mui/material";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../../context/hooks/useAuth.jsx";

const Login = () => {
    const {isAuth, personId, login} = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const changeRedirect = () => {
        setRedirect(true);
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
                localStorage.setItem('auth', 'true')
            }
            if (response.status === 401) setShowAlert(true);

        } catch (error) {
            e.preventDefault();
            setShowAlert(true)
        }
    };

    if (redirect) {
        return <Navigate to='/me'/>;
    }

    return (
        <>
            <Container
                component="login"
                maxWidth="xs"
                maxHight='xs'
            >
                <Box
                    sx={{
                        mt: '10rem',
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Typography
                        component="h2"
                        variant="h5"
                        sx={{mt: 1}}
                    >
                        Електронний ДДМА
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{
                            mt: '1rem',
                        }}
                    >
                        <TextField
                            margin="normal"
                            required
                            type="text"
                            id="username"
                            label="Унікальний ідентифікатор"
                            autoFocus
                            fullWidth
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            type="password"
                            id="password"
                            label="Пароль"
                            // autoFocus
                            fullWidth
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: '1rem'
                            }}
                        >
                            Увійти
                        </Button>
                    </Box>
                </Box>
            </Container>

            {showAlert
                ?
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    open={open}
                    autoHideDuration={5000}
                    TransitionComponent={Slide}
                    onClose={setShowAlert}
                >
                    <Alert
                        severity='error'
                        sx={{width: '100%'}}>
                        <AlertTitle>Помилка</AlertTitle>
                        <strong>Неправильне ім'я користувача або пароль</strong>
                    </Alert>
                </Snackbar>
                :
                <></>
            }
        </>
    );

}

export default Login;
