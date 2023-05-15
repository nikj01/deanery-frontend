import React, {useMemo, useState} from 'react';
import {AuthContext} from "./AuthContext.jsx";

const AuthProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false);
    const [personId, setPersonId] = useState(null);

    const login = (isAuth, personId) => {
        setIsAuth(isAuth);
        setPersonId(personId);
    }
    const logout = (isAuth, personId) => {
        setIsAuth(false);
        setPersonId(null);
    }

    const authValue = useMemo(() => {
        return { isAuth, personId, login, logout };
    }, [isAuth, personId]);

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
