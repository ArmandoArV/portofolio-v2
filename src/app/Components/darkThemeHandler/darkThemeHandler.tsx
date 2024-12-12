import React from "react";
import { useTheme } from "@/app/Context/themeContext/themeContext";

export const DarkThemeHandler = () => {
    const { toggleTheme } = useTheme();

    return (
        <div className="dark-theme-handler">
            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
};