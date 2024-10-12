import { CategoriesSection } from "../../components/features";
import styles from "./Categories.module.css";

export default function CategoriesPage() {
  return (
    <main className={styles.container}>
      <h1>Categorías</h1>
      <div className={styles.wrapper}>
        <CategoriesSection />
      </div>
    </main>
  );
}
