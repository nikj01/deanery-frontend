import React, {useState} from 'react';
import {Container} from "@mui/material";
import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import Menu from "./Menu.jsx";

const Layout = () => {
    const [isOpenMenu, setMenuOpen] = useState(false);

    return (
        <>
            <Header
                handleMenu={() => setMenuOpen(true)}
            />
            <Menu
                menuOpen={isOpenMenu}
                closeMenu={() => setMenuOpen(false)}
            />
            <Container>
                <Outlet/>
            </Container>
        </>
    );
};

export default Layout;
