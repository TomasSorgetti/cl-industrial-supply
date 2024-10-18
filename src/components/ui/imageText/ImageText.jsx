import styles from "./ImageText.module.css";
import { TitleTextButton } from "..";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

export default function ImageText({
  title,
  text,
  path,
  image,
  buttonLabel,
  orientation = "right",
  border = false,
}) {
  const { imgRef, isVisible } = useIntersectionObserver();

  return (
    <div
      className={`${styles.container} ${styles[orientation]} ${
        border ? styles.border : ""
      }`}
    >
      <TitleTextButton
        title={title}
        text={text}
        path={path}
        buttonLabel={buttonLabel}
      />
      <img
        ref={imgRef}
        className={styles.image}
        src={isVisible ? image : ""}
        alt={isVisible ? `${title} vector plan` : "loading..."}
      />
    </div>
  );
}
