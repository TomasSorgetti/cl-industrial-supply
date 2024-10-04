import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products.service";

export default function ProductPage() {
  const { t, i18n } = useTranslation();
  const params = useParams();
  const [productData, setProductData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const data = getProductById(params.productId, i18n.language);
    if (data === null) {
      setError(true);
    }
    setProductData(data);
  }, [i18n.language, params.productId]);

  if (error) {
    return (
      <>
        <h1>{t("Error404.title")}</h1>
      </>
    );
  }
  return (
    <main>
      {productData && (
        <>
          <h1>{productData.title}</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
            minus ad laboriosam, magnam placeat assumenda ea et quaerat ex aut
            harum aliquam dolorem nobis maxime mollitia odit? Ratione, explicabo
            accusantium?
          </p>
        </>
      )}
    </main>
  );
}
