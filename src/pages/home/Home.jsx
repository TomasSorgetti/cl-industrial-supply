import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { CallToAction, HomeBanner } from "../../components/layout";
import { CategoriesSection } from "../../components/features";
import { TitleTextButton } from "../../components/ui";
import homeAbout from "../../assets/images/home_about.png";
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className={styles.home_main}>
      <HomeBanner />
      <div className={styles.wrapper}>
        <div className={styles.aboutCard}>
          <img src={homeAbout} alt="todo" />
          <TitleTextButton
            title={t("Home.aboutTitle")}
            text={t("Home.aboutDescription")}
            path="/about"
            buttonLabel={t("Home.aboutButton")}
          />
        </div>
        <CategoriesSection />
      </div>
      <CallToAction />
    </main>
  );
}
