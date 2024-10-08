import styles from "./HomeBanner.module.css";
import { useTranslation } from "react-i18next";
import bannerLogo from "../../../../assets/images/banner_logo.svg";
import { ButtonLink } from "../../../ui";
export default function HomeBanner() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h1>{t("Home.title")}</h1>
          <div className={styles.divider}></div>
          <p>{t("Home.description")}</p>
          <div className={styles.buttons}>
            <ButtonLink path="/contact" variant="secondary">
              Contactar
            </ButtonLink>
            <ButtonLink path="/contact" variant="primary">
              Contactar
            </ButtonLink>
          </div>
        </div>
        <img src={bannerLogo} alt="CL industrial supply logo" className={styles.logo} />
      </div>
    </section>
  );
}
