import { useTranslation } from "react-i18next";
import styles from "./Contact.module.css";
import logo from "../../assets/images/logo.svg";
import { ContactForm } from "../../components/features";

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <main>
      <div className={styles.title_container}>
        <img src={logo} alt="cl industrial supply white logo" />
        <h1>{t("Contact.title")}</h1>
        <p>{t("Contact.description")}</p>
        <div className={styles.divider}></div>
      </div>

      <ContactForm />
    </main>
  );
}
