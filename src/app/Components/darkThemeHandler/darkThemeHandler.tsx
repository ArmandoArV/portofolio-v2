import React from "react";
import { useTheme } from "@/app/Context/themeContext/themeContext";
import Image from "next/image";
import darkImg from "@/app/assets/images/moon-svgrepo-com.svg";
import lightImg from "@/app/assets/images/sun-svgrepo-com.svg";
import styles from "./darkThemeHandler.module.css";
export const DarkThemeHandler = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={styles.themeContainer}>
            <button
                className={styles.themeButton}
                onClick={toggleTheme}>
                <Image
                    src={theme === "light" ? darkImg : lightImg}
                    alt={theme === "light" ? "Dark Mode" : "Light Mode"}
                    className={styles.themeImg}
                />
            </button>
        </div>
    );
};