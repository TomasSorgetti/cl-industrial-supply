import styles from "./FormField.module.css";

export default function FormField({
  id,
  label,
  name,
  type = "text",
  placeholder,
  value,
  handleChange,
  required = false,
  textarea = false,
  error = false,
  autoComplete = "on",
}) {
  const commonProps = {
    id,
    name,
    placeholder,
    value,
    onChange: handleChange,
    required,
    autoComplete,
  };

  return (
    <div className={`${styles.container} ${error ? styles.error : ""}`}>
      <label htmlFor={id}>{label}:</label>
      {textarea ? (
        <textarea {...commonProps} />
      ) : (
        <input {...commonProps} type={type} />
      )}
      {error && <p className={styles.errorText}>{error}</p>}
    </div>
  );
}
