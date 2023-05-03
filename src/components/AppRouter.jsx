import React, {useContext} from 'react';
import {AuthContext} from "../context/index.jsx";
import {Routes} from "react-router-dom";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        // return <SomeLoader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />)}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />)}
            </Routes>
    );
};

export default AppRouter;
