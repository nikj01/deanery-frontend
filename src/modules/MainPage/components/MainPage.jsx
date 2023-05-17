import React from 'react';
import {Navigate} from "react-router-dom";
import {Button} from "@mui/material";

const MainPage = () => {

    const handleClick = () => {
        return <Navigate to='/me'/>
    }

    return (
        <Button
            variant="outlined"
            color="primary"
            href="/main"
            onClick={handleClick}
        >
            To person
        </Button>
    // <Link to={'/me'}>To you</Link>
        
    );
};

export default MainPage;
