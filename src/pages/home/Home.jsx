import { useTranslation } from "react-i18next";
import { HomeBanner } from "../../components/layout";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <HomeBanner />
    </main>
  );
}
