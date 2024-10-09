import { Productcardbutton } from "../";
import styles from "./ProductCard.module.css";

export default function ProductCard({ title, image, path, label }) {
  return (
    <div className={styles.card_container}>
      <img src={image} alt={title} className={styles.card_container_img}/>
      <h3>{title}</h3>
      <Productcardbutton path={path}>{label}</Productcardbutton>
    </div>
  );
}
