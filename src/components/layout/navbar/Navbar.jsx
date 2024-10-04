import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../../services/categories.service";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [categoriesData, setCategoriesData] = useState([]);

  useEffect(() => {
    const data = getAllCategories(i18n.language);
    setCategoriesData(data);
  }, [i18n.language]);

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
          <li>
            {t("Navbar.products")}
            <ul>
              {categoriesData?.map((category) => (
                <li key={category.id}>
                  <Link to={`/categories/${category.id}`}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <button onClick={() => changeLanguage("en")}>EN</button>
            <button onClick={() => changeLanguage("es")}>ES</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
