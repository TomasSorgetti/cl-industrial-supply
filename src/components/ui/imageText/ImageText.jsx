import styles from "./ImageText.module.css";
import { TitleTextButton } from "..";

export default function ImageText({
  title,
  text,
  path,
  image,
  buttonLabel,
  orientation = "right",
  border = false,
}) {
  return (
    <div className={`${styles.container} ${styles[orientation]} ${border ? styles.border : ""}`}>
      <TitleTextButton
        title={title}
        text={text}
        path={path}
        buttonLabel={buttonLabel}
      />
      <img className={styles.image} src={image} alt={`${title} vector plan`} />
    </div>
  );
}
