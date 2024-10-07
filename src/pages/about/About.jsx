import styles from "./About.module.css";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();


  return (
    <main>
      <h1>{t("About.title")}</h1>
    </main>
  );
}
