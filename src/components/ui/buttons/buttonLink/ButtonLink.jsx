import styles from "./ButtonLink.module.css";
import { Link } from "react-router-dom";

export default function ButtonLink({ path, children, variant, size = "lg" }) {
  return (
    <Link className={`${styles.button} ${styles[variant]} ${styles[size]}`} to={path}>
      {children}
    </Link>
  );
}
