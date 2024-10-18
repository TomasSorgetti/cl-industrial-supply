import styles from "./ContactForm.module.css";
import { FormButton, FormField, Toast } from "../../../ui";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { validateContact } from "./contact.validator";

export default function ContactForm() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
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
  const [toast, setToast] = useState({
    visible: false,
    message: "",
    type: "",
  });

  const showToast = (message, type) => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast({ visible: false, message: "", type: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorForm({ ...errorForm, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateContact(formData);
    setErrorForm(errors);

    const hasErrors = Object.values(errors).some((error) => error !== "");
    if (hasErrors) {
      return;
    }
    setIsLoading(true);
    // TODO => send data to server
    // Simulando una llamada a una API
    setTimeout(() => {
      try {
        throw new Error("Error sending data");
        showToast("Formulario enviado con éxito.", "success");
      } catch (error) {
        console.log(error.message);
        showToast("Error al enviar el formulario.", "error");
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <FormField
          id="contact-name"
          label={t("Contact.formNameLabel")}
          name="name"
          placeholder={t("Contact.formNameInput")}
          value={formData.name}
          handleChange={handleChange}
          error={errorForm.name}
        />
        <FormField
          id="contact-phone"
          label={t("Contact.formPhoneLabel")}
          name="phone"
          placeholder={t("Contact.formPhoneInput")}
          value={formData.phone}
          handleChange={handleChange}
          error={errorForm.phone}
        />
        <FormField
          id="contact-email"
          label={t("Contact.formEmailLabel")}
          name="email"
          placeholder={t("Contact.formEmailInput")}
          value={formData.email}
          handleChange={handleChange}
          error={errorForm.email}
        />
        <FormField
          id="contact-message"
          label={t("Contact.formMessageLabel")}
          name="message"
          placeholder={t("Contact.formMessageInput")}
          value={formData.message}
          handleChange={handleChange}
          textarea
          error={errorForm.message}
        />
        <FormButton type="submit" disabled={isLoading}>
          {t("Contact.formButton")}
        </FormButton>
      </form>
      <Toast
        message={toast.message}
        type={toast.type}
        visible={toast.visible}
      />
    </>
  );
}
