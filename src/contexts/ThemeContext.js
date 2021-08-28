import React, { useState, createContext } from "react";

// Tạo 1 context
export const ThemeContext = createContext();

const ThemeConTextProvider = ({ children }) => {
    // State
    const [theme, setTheme] = useState({
        isLightTheme: false,
        light: {
            background: "rgb(240,240,240)",
            color: "black",
        },
        dark: {
            background: "rgb(39,39,39)",
            color: "white",
        },
    });

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    };

    // Context data
    const themeContextData = {
        theme: theme,
        toggleTheme: toggleTheme
    };

    // Return provider: Xuất khẩu các context data
    return <ThemeContext.Provider value={themeContextData}>{children}</ThemeContext.Provider>;
};

export default ThemeConTextProvider;
