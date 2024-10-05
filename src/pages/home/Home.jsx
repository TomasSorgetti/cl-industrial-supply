import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { HomeBanner } from "../../components/layout";
import { CategoriesSection } from "../../components/features";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <HomeBanner />
      <div className={styles.wrapper}>
        <CategoriesSection />
      </div>
    </main>
  );
}
