import i18next from "i18next";

export function validateContact(data) {
  const errors = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  //* Name validation
  if (data.name.trim() === "") {
    errors.name = `${i18next.t("Contact.formNameLabel")} ${i18next.t(
      "ValidationContact.required"
    )}`;
  } else if (data.name.length < 3) {
    errors.name = i18next.t("ValidationContact.nameLength");
  }

  //* Phone validation
  if (data.phone.trim() === "") {
    errors.phone = `${i18next.t("Contact.formPhoneLabel")} ${i18next.t(
      "ValidationContact.required"
    )}`;
  }
  // else if (!/\d{3}-\d{3}-\d{4}/.test(data.phone)) {
  //   errors.phone = i18next.t("ValidationContact.phoneInvalid");
  // }

  //* Email validation
  if (data.email.trim() === "") {
    errors.email = `${i18next.t("Contact.formEmailLabel")} ${i18next.t(
      "ValidationContact.required"
    )}`;
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = `${i18next.t("Contact.formEmailLabel")} ${i18next.t(
      "ValidationContact.invalid"
    )}`;
  }

  //* Message validation
  if (data.message.trim() === "") {
    errors.message = `${i18next.t("Contact.formMessageLabel")} ${i18next.t(
      "ValidationContact.required"
    )}`;
  } else if (data.message.length < 30) {
    errors.message = i18next.t("ValidationContact.messageLength");
  }

  return errors;
}
