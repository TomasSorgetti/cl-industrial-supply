import styles from "./About.module.css";
import { useTranslation } from "react-i18next";
import { SecondaryBanner } from "../../components/layout";
import aboutImage from "../../assets/images/about_image.png";
import ImageText from "../../components/ui/imageText/ImageText";
import aboutFirstIamge from "../../assets/images/about_first_image.png";
import aboutSecondImage from "../../assets/images/about_second_image.png";

export default function AboutPage() {
  const { t } = useTranslation();


  return (
    <main>

    <SecondaryBanner
        title={t("About.title")}
        description={t("About.description")}  
        img={aboutImage}
      />

      <div className={styles.container_wrapper}>
      
      <ImageText 
        title={t("About.firstHeading")}  
        text={t("About.firstText")}
        image={aboutFirstIamge}
        orientation="left"/>
      <ImageText 
        title={t("About.secondHeading")}  
        text={t("About.secondText")}
        image={aboutSecondImage}
        orientation="right"/>
      </div>
      
    </main>
  );
}
