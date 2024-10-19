import styles from "./FormButton.module.css";

export default function FormButton({ children, type = "submit", isLoading = false }) {
  return (
    <button type={type} className={`${styles.button} ${isLoading ? styles.loading : ""}`} disabled={isLoading}>
      {children}
    </button>
  );
}
