import styles from "./FormField.module.css";

export default function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  handleChange,
  required = false,
  textarea = false,
  error = false,
}) {
  const commonProps = {
    name,
    placeholder,
    value,
    onChange: handleChange,
    required,
  };

  return (
    <div className={`${styles.container} ${error ? styles.error : ""}`}>
      <label htmlFor={name}>{label}</label>
      {textarea ? (
        <textarea {...commonProps} />
      ) : (
        <input {...commonProps} type={type} />
      )}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
