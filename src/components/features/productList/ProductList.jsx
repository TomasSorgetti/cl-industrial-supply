import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getProductsByCategory } from "../../../services/products.service";
import ProductCard from "../../ui/productCard/ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList({ category }) {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProductsByCategory(category, i18n.language);

    // TODO => manage errors
    setProducts(data);
  }, [i18n.language, category]);

  return (
    <div className={styles.cards_main_container}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          path={`/products/${product.id}`}
          image={product.image}
          label={t("ProductList.button")}
        />
      ))}
    </div>
  );
}
