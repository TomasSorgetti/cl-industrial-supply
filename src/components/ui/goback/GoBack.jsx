import styles from "./GoBack.module.css";
import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/icons/category_arrow.png";

export default function GoBack({ path, children }) {
  return (
    <div className={styles.container}>
      <Link className={styles.button} to={path}>
        <img src={arrowIcon} alt="arrow icon" />
        {children}
      </Link>
    </div>
  );
}
