import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../services/categories.service";
import { ButtonLink } from "../../ui";
import logo from "../../../assets/images/logo.svg";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const normalizedLanguage = i18n.language.slice(0, 2);
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const data = getAllCategories(i18n.language);
    setCategoriesData(data);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">
          <img src={logo} alt="CL industrial supply logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">{t("Navbar.home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("Navbar.about")}</Link>
          </li>
          <li className={styles.dropdown}>
            {t("Navbar.products")}
            {/* <ul>
              {categoriesData?.map((category) => (
                <li key={category.id}>
                  <Link to={`/categories/${category.id}`}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul> */}
          </li>
          <li>
            <ButtonLink path="/contact" variant="primary" size="sm">
              {t("Navbar.contact")}
            </ButtonLink>
          </li>
          <li className={styles.language}>
            <button
              className={`${normalizedLanguage === "en" ? styles.active : ""}`}
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
            -
            <button
              className={`${normalizedLanguage === "es" ? styles.active : ""}`}
              onClick={() => changeLanguage("es")}
            >
              ES
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
