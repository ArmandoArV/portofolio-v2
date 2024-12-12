"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { DarkThemeHandler } from "./Components/darkThemeHandler/darkThemeHandler";
import { ThemeProvider, useTheme } from "./Context/themeContext/themeContext";
import pfp from "@/app/assets/images/pfp.jpg";
const HomeContent = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? styles.page : styles.pageDark}>
      <main className={theme === "light" ? styles.main : styles.mainDark}>
        <div className={styles.leftContainer}>
          <div className="pfpContainer">
            <Image src={pfp} alt="logo" className={styles.pfpImg}/>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.topRightContainer}></div>
          <div className={styles.mediumRightContainer}>

          </div>
          <div className={styles.bottomRightContainer}>
            <DarkThemeHandler />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}