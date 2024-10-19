import React from "react";
import styles from "./Toast.module.css"; // Asegúrate de crear este archivo de estilos

export default function Toast({
  message,
  type,
  visible,
  position = "left-bottom",
}) {
  if (!visible) return null;

  return (
    <div className={`${styles.toast} ${styles[type]} ${styles[position]}`}>
      {message}
    </div>
  );
}
