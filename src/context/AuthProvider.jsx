import React, {useMemo, useState} from 'react';
import {AuthContext} from "./AuthContext.jsx";

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [personId, setPersonId] = useState(null);
    const [password, setPassword] = useState(null);

    const login = (isAuth, personId, password) => {
        setIsAuth(isAuth);
        setPersonId(personId);
        setPassword(password);
    }
    const logout = () => {
        setIsAuth(false);
        setPersonId(null);
    }

    // const authValues = useMemo(() => {
    //     return { isAuth, personId, login, logout };
    // }, [isAuth, personId]);

    const authValues = {isAuth, personId, password, login, logout};

    return (
        <AuthContext.Provider value={authValues}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
