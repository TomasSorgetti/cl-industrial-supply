import styles from "./CategoryCard.module.css";
import { TitleTextButton } from "../";

export default function CategoryCard({
  title,
  text,
  path,
  image,
  orientation = "right",
}) {
  return (
    <div className={`${styles.container} ${styles[orientation]}`}>
      <TitleTextButton
        title={title}
        text={text}
        path={path}
        buttonLabel="Ver más"
      />
      <img src={image} alt={`${title} vector plan`} />
    </div>
  );
}
