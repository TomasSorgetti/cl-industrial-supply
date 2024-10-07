import styles from "./CardButton.module.css";
import { Link } from "react-router-dom";
import arrowRight from "../../../../assets/icons/arrow_right.svg";
export default function CardButton({ children, path }) {
  return (
    <Link className={styles.button} to={path}>
      <div className={styles.bar}></div>
      {children}
      <img src={arrowRight} alt="arrow icon" />
    </Link>
  );
}
