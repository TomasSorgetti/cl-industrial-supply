import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { getProductsByCategory } from "../../../services/products.service";
import ProductCard from "../../ui/productCard/ProductCard";
import styles from "./ProductList.module.css";

export default function ProductList({ categoryId }) {
  const { t, i18n } = useTranslation();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const data = getProductsByCategory(categoryId, i18n.language);
    // TODO => manage errors
    setProducts(data);
  }, []);

  return (
    <div className={styles.cards_main_container}>
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          path="asd"
          image={product.image}
          label={t("ProductList.button")}
        />
      ))}
    </div>
  );
}
