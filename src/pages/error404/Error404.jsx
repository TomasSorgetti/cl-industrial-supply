import { useTranslation } from "react-i18next";

export default function Error404Page() {
  const { t } = useTranslation();

  return (
    <>
      <h1>{t("Error404.title")}</h1>
    </>
  );
}
