import styles from "./FormButton.module.css";

export default function FormButton({
  children,
  type = "submit",
  disabled = false,
}) {
  return (
    <button type={type} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
}
