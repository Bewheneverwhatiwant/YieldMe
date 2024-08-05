// AuthContext.js
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        login_id: '',
        username: '',
        accessToken: '',
        point: '',
    });

    const setAuthInfo = (login_id, username, accessToken, point) => {
        setAuth({ login_id, username, accessToken, point });
    };

    return (
        <AuthContext.Provider value={{ auth, setAuthInfo }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
