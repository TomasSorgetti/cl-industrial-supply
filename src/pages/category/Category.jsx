import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../services/categories.service";

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
    return (
      <>
        <h1>{t("Error404.title")}</h1>
      </>
    );
  }

  return (
    <main>
      {categoryData && (
        <>
          <h1>{categoryData.title}</h1>
          <p>{categoryData.description}</p>
        </>
      )}
    </main>
  );
}
