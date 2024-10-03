import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <p>{t("Footer.copyright")}</p>
    </>
  );
}
