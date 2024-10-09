import styles from "./Productcardbutton.module.css";
import { Link } from "react-router-dom";
import arrowRight from "../../../../assets/icons/arrow_right.svg";
export default function CardButton({ children, path }) {
  return (
    <Link className={styles.button} to={path}>
      <span className={styles.bar}></span>
      {children}
      <img src={arrowRight} alt="arrow icon" />
    </Link>
  );
}
