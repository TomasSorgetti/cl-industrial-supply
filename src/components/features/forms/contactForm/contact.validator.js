export function validateContact(data) {
  const errors = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };

  //* Email validation
  if (data.email.trim() === "") {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email is invalid";
  }

  return errors;
}
