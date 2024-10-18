import styles from "./Product.module.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../../services/products.service";
import { ButtonLink } from "../../components/ui";
import categoryArrow from "../../assets/icons/category_arrow.png";

export default function ProductPage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const params = useParams();
  const [productData, setProductData] = useState({});
  const [error, setError] = useState(false);

  useEffect(() => {
    const data = getProductById(params.productId, i18n.language);
    if (data === null) {
      setError(true);
    }
    setProductData(data);

    return () => {
      setError(false);
      setProductData(null);
    };
  }, [i18n.language, params.productId]);

  if (error) {
    return (
      <>
        <h1>{t("Error404.title")}</h1>
      </>
    );
  }

  return (
    <main className={styles.container}>
      <div className={styles.breadcrumbs}>
        <button onClick={() => navigate(-1)} className={styles.return}>
          <img src={categoryArrow} alt="arrow icon" />
          {productData?.category} /
        </button>
        <span>{productData?.title}</span>
      </div>
      {productData && (
        <>
          <div className={styles.productContainer}>
            <img src={productData.image} alt={productData.title} />
            <div className={styles.productInfo}>
              <h1>{productData.title}</h1>
              <p>{productData.description}</p>
              <a
                href={`/src/assets/pdf/${productData.id}.pdf`}
                download
                className={styles.download}
              >
                {t("Product.download")}
              </a>
            </div>
          </div>
          <iframe
            className={styles.pdf}
            src={productData.pdf}
            title={`${productData.title} PDF Preview`}
            width="100%"
            height={"1000px"}
          ></iframe>
        </>
      )}
    </main>
  );
}
