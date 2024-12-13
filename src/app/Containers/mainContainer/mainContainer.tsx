import Image from "next/image";
import styles from "./mainContainer.module.css";
import pfp from "@/app/assets/images/pfp.jpg";
import { DarkThemeHandler } from "@/app/Components/darkThemeHandler/darkThemeHandler";
import { useTheme } from "@/app/Context/themeContext/themeContext";
import { useTranslation } from "@/app/Context/translationContext/translationContext";

export const MainContainer = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    return (
        <main className={theme === "light" ? styles.main : styles.mainDark}>
            <div className={styles.leftContainer}>
                <div className="pfpContainer">
                    <Image src={pfp} alt="logo" className={styles.pfpImg} />
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.topRightContainer}>
                    <p className={styles.nameText}>
                        Armando Arredondo Valle
                    </p>
                </div>
                <div className={styles.mediumRightContainer}>
                    <p className={styles.degreeText}>
                        {t("degree")}
                    </p>
                </div>
                <div className={styles.bottomRightContainer}>
                    <DarkThemeHandler />
                </div>
            </div>
        </main>
    );
};