import styles from "./Home.module.css";
import { useTranslation } from "react-i18next";
import { CallToAction, HomeBanner } from "../../components/layout";
import { ImageText, TitleTextButton } from "../../components/ui";
import homeAbout from "../../assets/images/home_about.png";
import categories from "../../assets/images/products.png";
export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main className={styles.home_main}>
      <HomeBanner />
      <div className={styles.wrapper}>
        <div className={styles.aboutCard}>
          <img src={homeAbout} alt="todo" className={styles.aboutImg} />
          <TitleTextButton
            title={t("Home.aboutTitle")}
            text={t("Home.aboutDescription")}
            path="/about"
            buttonLabel={t("Home.aboutButton")}
          />
        </div>
        <ImageText
          title={t("Home.productsTitle")}
          text={t("Home.productsDescription")}
          image={categories}
          path="/categories"
          orientation="right"
          buttonLabel={t("Home.productsButton")}
        />
      </div>
      <CallToAction />
    </main>
  );
}
