import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  if (pathname === "/") {
    return;
  }
  return (
    <>
      <p>{t("Footer.copyright")}</p>
    </>
  );
}
