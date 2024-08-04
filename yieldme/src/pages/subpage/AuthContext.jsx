// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        login_id: '',
        username: '',
        accessToken: '',
    });

    const setAuthInfo = (login_id, username, accessToken) => {
        setAuth({ login_id, username, accessToken });
    };

    return (
        <AuthContext.Provider value={{ auth, setAuthInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
