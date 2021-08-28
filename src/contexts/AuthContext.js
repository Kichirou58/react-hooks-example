import React, { useState, createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // State
    const [isAuthenticated, setAuthentication] = useState(false);

    const toggleAuth = () => {
        setAuthentication(!isAuthenticated);
    };

    // useEffect
    useEffect(() => {
        alert(isAuthenticated ? "Login successful" : "You are logged out. Please login to se todos");
    }, [isAuthenticated]);

    // Context data
    const authContextData = {
        isAuthenticated,
        toggleAuth,
    };
    return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
