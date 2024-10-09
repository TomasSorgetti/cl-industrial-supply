import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../services/categories.service";
import { ProductList } from "../../components/features";
import { ImageText } from "../../components/ui";
import styles from "./Category.module.css";
export default function ProductPage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const [categoryData, setCategoryData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const data = getCategoryById(params.categoryId, i18n.language);
    if (data === undefined) {
      setError(true);
    }
    setCategoryData(data);

    return () => {
      setError(false);
      setCategoryData({});
    };
  }, [params.categoryId, i18n.language]);

  if (error) {
    // TODO => Navigate to error page
    return (
      <>
        <h1>{t("Error404.title")}</h1>
      </>
    );
  }

  return (
    <main>
      {categoryData && (
        <div className={styles.container}>
          <div className={styles.imagetext_container}>
            <ImageText
              title={categoryData.title}
              image={categoryData.image}
              text={categoryData.description}
            />
          </div>

          <ProductList category={categoryData.title} />
        </div>
      )}
    </main>
  );
}
