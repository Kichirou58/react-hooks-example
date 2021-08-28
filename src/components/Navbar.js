import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

const Navbar = () => {
    // Load theme context
    const { theme } = useContext(ThemeContext);

    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    // Load auth context
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    return (
        <div className="navbar" style={style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? "You are Logged in " : ""}
                    <button onClick={toggleAuth}>{isAuthenticated ? "Log out" : "Log in"}</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
