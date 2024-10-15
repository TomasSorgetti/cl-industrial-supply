import { CategoriesSection } from "../../components/features";
import styles from "./Categories.module.css";
import { SecondaryBanner } from "../../components/layout";
import { useTranslation } from "react-i18next";
import productsBanner from "../../assets/images/prodcuts_banner.png";

export default function CategoriesPage() {

  const { t } = useTranslation();

  return (
    <main className={styles.container}>
      <SecondaryBanner img={productsBanner} title={t("ProductsPage.title")} description={t("ProductsPage.description")}/>
      <div className={styles.wrapper}>
        <CategoriesSection />
      </div>
    </main>
  );
}
