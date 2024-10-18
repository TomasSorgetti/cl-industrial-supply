import styles from "./ProductCard.module.css";
import { Productcardbutton } from "../";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

export default function ProductCard({ title, image, path, label }) {
  const { imgRef, isVisible } = useIntersectionObserver();

  return (
    <div className={styles.card_container}>
      <img
        ref={imgRef}
        src={isVisible ? image : ""}
        alt={isVisible ? title : "loading..."}
        className={styles.card_container_img}
      />
      <h3>{title}</h3>
      <Productcardbutton path={path}>{label}</Productcardbutton>
    </div>
  );
}
