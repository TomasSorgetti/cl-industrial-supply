import styles from "./CallToAction.module.css";
import logo from "../../../assets/images/white_logo.svg";
import { ButtonLink } from "../../ui";
import { useTranslation } from "react-i18next";
export default function CallToAction() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <img src={logo} alt="cl industrial supply white logo" />
      <h2>{t("CallToAction.title")}</h2>
      <ButtonLink path="/contact" variant="primary">
        {t("CallToAction.button")}
      </ButtonLink>
    </section>
  );
}
