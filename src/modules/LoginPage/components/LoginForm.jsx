import React from 'react';
import {Box, Button, Container, TextField, Typography} from "@mui/material";

const LoginForm = ({handleSubmit, setUsername, setPassword}) => {
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
        </>
    );
};

export default LoginForm;
