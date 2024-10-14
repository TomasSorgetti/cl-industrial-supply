import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from "react-router-dom";
import { getAllCategories } from "../../../services/categories.service";
import { ButtonLink } from "../../ui";
import logo from "../../../assets/images/logo.svg";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const normalizedLanguage = i18n.language.slice(0, 2);
  const [categoriesData, setCategoriesData] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const data = getAllCategories(i18n.language);
    setCategoriesData(data);
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleClose = () => {
    setToggle(false);
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.scrolled : ""} ${
        toggle ? styles.active : ""
      }`}
    >
      <nav>
        <Link to="/">
          <img src={logo} alt="CL industrial supply logo" />
        </Link>

        <button onClick={handleToggle} className={styles.hamburger}>
          <div className={styles.hamburger_bar}></div>
          <div className={styles.hamburger_bar}></div>
          <div className={styles.hamburger_bar}></div>
        </button>

        <ul className={styles.menu}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeNav : "")}
              onClick={handleClose}
              to="/"
            >
              {t("Navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeNav : "")}
              onClick={handleClose}
              to="/about"
            >
              {t("Navbar.about")}
            </NavLink>
          </li>
          <li className={styles.dropdown}>
            <NavLink
              className={({ isActive }) =>
                isActive || window.location.pathname.includes("products")
                  ? styles.activeNav
                  : ""
              }
              onClick={handleClose}
              to="/categories"
            >
              {t("Navbar.products")}
            </NavLink>
            <ul>
              {categoriesData?.map((category) => (
                <li key={category.id}>
                  <Link onClick={handleClose} to={`/categories/${category.id}`}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
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
