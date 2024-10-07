import styles from "./FormButton.module.css";

export default function FormButton({ children, type = "submit" }) {
  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
}
