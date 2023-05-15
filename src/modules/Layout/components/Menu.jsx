import React from 'react';
import {Drawer, List, ListItem, ListItemText} from "@mui/material";

const Menu = (props) => {
    const {
        menuOpen,
        closeMenu = Function.prototype,
    } = props;

    return (
        <Drawer
            anchor={'left'}
            open={menuOpen}
            onClose={closeMenu}
        >
            <List sx={{width:'500px'}}>
                <ListItem>
                    asd
                </ListItem>
                <ListItemText primary={'Functions'}/>
            </List>
        </Drawer>
    );
};

export default Menu;