import React, { useReducer, createContext, useEffect } from "react";
import { authReducer } from "../reducers/AuthReducer";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // State
    // const [isAuthenticated, setAuthentication] = useState(false);

    // const toggleAuth = () => {
    //     setAuthentication(!isAuthenticated);
    // };

    const [isAuthenticated, dispatch] = useReducer(authReducer, false);

    // useEffect
    useEffect(() => {
        alert(isAuthenticated ? "Login successful" : "You are logged out. Please login to se todos");
    }, [isAuthenticated]);

    // Context data
    const authContextData = {
        isAuthenticated,
        dispatch,
    };
    return <AuthContext.Provider value={authContextData}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
