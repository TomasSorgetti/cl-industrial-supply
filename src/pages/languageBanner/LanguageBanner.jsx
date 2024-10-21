import styles from "./LanguageBanner.module.css";
import logo from "../../assets/images/banner_logo.svg";
import { LanguageButton } from "../../components/ui";
import spanishFlag from "../../assets/icons/spanishFlag.png";
import englishFlag from "../../assets/icons/englishFlag.png";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function LanguajeBanner() {
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    navigate("/home");
  };

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <img src={logo} alt="cl industrial supply logo" />
        <div className={styles.buttons_container}>
          <LanguageButton
            handleClick={() => handleChangeLanguage("en")}
            image={englishFlag}
          >
            English
          </LanguageButton>
          <LanguageButton
            handleClick={() => handleChangeLanguage("es")}
            image={spanishFlag}
          >
            Español
          </LanguageButton>
        </div>
      </div>
    </main>
  );
}
