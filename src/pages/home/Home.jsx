import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t("Home.title")}</h1>
      <p>{t("Home.description")}</p>
    </main>
  );
}
