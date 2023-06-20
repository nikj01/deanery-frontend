import React from 'react';
import {Alert, AlertTitle, Slide, Snackbar} from "@mui/material";

const ErrorMessage = (clearError) => {
    return (
        <>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                open={open}
                autoHideDuration={1000}
                TransitionComponent={Slide}
                // onClose={clearError}
            >
                <Alert
                    severity='error'
                    sx={{width: '100%'}}>
                    <AlertTitle>Помилка</AlertTitle>
                    <strong>Неправильне ім'я користувача або пароль</strong>
                </Alert>
            </Snackbar>
        </>
    );
};

export default ErrorMessage;
