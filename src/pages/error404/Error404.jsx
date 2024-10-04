import { useTranslation } from "react-i18next";

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t("Error404.title")}</h1>
    </main>
  );
}
