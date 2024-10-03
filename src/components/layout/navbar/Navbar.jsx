import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header>
      <nav>
        <Link to="/">Logo</Link>
        <ul>
          <li>
            <Link to="/">{t("Navbar.home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("Navbar.about")}</Link>
          </li>
          <li>
            <Link to="/contact">{t("Navbar.contact")}</Link>
          </li>
          {/* <li>
            <Link to="/categories">{t("Navbar.products")}</Link>
          </li> */}
          <li>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("es")}>ES</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
