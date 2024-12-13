"use client";

import styles from "./page.module.css";
import { ThemeProvider, useTheme } from "./Context/themeContext/themeContext";
import { MainContainer } from "./Containers/mainContainer/mainContainer";
import { LanguageProvider } from "./Context/languageContext/languageContext";
import { TranslationProvider } from "./Context/translationContext/translationContext";
import { LanguageSelector } from "./Components/languageSelector/languageSelector";

const HomeContent = () => {
  const { theme } = useTheme();
  return (
    <div className={theme === "light" ? styles.page : styles.pageDark}>
      <MainContainer />
      <footer>
        <LanguageSelector />
      </footer>
    </div>
  );
};

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TranslationProvider>
          <HomeContent />
        </TranslationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
