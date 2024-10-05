import styles from "./CategoryCard.module.css"
import { TitleTextButton } from "../";

export default function CategoryCard({
  title,
  text,
  path,
  buttonLabel,
  image,
}) {
  console.log(title, text, path, buttonLabel);

  return (
    <div className={styles.container}>
      <TitleTextButton
        title={title}
        text={text}
        path={path}
        buttonLabel={buttonLabel}
      />
      <img src={image} alt={`${title} vector plan`} />
    </div>
  );
}
