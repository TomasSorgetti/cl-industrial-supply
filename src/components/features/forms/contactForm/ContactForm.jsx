import styles from "./ContactForm.module.css";
import { FormButton, FormField } from "../../../ui";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [errorForm, setErrorForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormField
        label={t("Contact.formNameLabel")}
        name="name"
        placeholder={t("Contact.formNameInput")}
        value={formData.name}
        handleChange={handleChange}
        error={errorForm.name}
      />
      <FormField
        label={t("Contact.formPhoneLabel")}
        name="phone"
        placeholder={t("Contact.formPhoneInput")}
        value={formData.phone}
        handleChange={handleChange}
        error={errorForm.phone}
      />
      <FormField
        label={t("Contact.formEmailLabel")}
        name="email"
        placeholder={t("Contact.formEmailInput")}
        value={formData.email}
        handleChange={handleChange}
        error={errorForm.email}
      />
      <FormField
        label={t("Contact.formMessageLabel")}
        name="message"
        placeholder={t("Contact.formMessageInput")}
        value={formData.message}
        handleChange={handleChange}
        textarea
        error={errorForm.message}
      />
      <FormButton type="submit">{t("Contact.formButton")}</FormButton>
    </form>
  );
}
