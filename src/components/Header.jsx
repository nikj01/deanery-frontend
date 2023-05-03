import React, {useContext, useState} from 'react';
import {AppBar, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {AuthContext} from "../context/index.jsx";

const Header = ({handleMenu, menu}) => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    {isAuth
                    ?
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={handleMenu}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" color="inherit" component="div">
                                Функціонал
                            </Typography>
                        </>
                    :
                        <></>
                    }
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;
