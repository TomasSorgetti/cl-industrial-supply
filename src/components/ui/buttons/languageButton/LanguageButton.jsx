import styles from "./LanguageButton.module.css";

export default function LanguageButton({ children, handleClick, image }) {
  return (
    <button className={styles.button} onClick={handleClick}>
      <img src={image} alt="languaje flag" />
      {children}
    </button>
  );
}
