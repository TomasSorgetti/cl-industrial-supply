import styles from "./TitleTextButton.module.css";
import { CardButton } from "../";

export default function TitleTextButton({ title, text, path, buttonLabel }) {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{text}</p>
      {buttonLabel && <CardButton path={path}>{buttonLabel}</CardButton>}
    </div>
  );
}
