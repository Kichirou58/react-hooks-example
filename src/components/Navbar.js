import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { TOGGLE_AUTH } from "../reducers/types";

const Navbar = () => {
    // Load theme context
    const { theme } = useContext(ThemeContext);

    const { isLightTheme, light, dark } = theme;
    const style = isLightTheme ? light : dark;

    // Load auth context
    const { isAuthenticated, dispatch } = useContext(AuthContext);

    return (
        <div className="navbar" style={style}>
            <h1>My Hooks App</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>
                    {isAuthenticated ? "You are Logged in " : ""}
                    <button onClick={()=> {
                        dispatch({
                            type: TOGGLE_AUTH
                        })
                    }}>{isAuthenticated ? "Log out" : "Log in"}</button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
