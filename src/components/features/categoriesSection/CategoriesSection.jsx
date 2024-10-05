import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/categories.service";
import { useTranslation } from "react-i18next";
import { CategoryCard } from "../../ui";

export default function CategoriesSection() {
  const { i18n } = useTranslation();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = getAllCategories(i18n.language);
    setCategories(data);
  }, []);
  console.log("TODO => sacar log", categories);

  return (
    <div>
      {categories?.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          text={category.description}
          image={category.image}
          path={`/categories/${category.id}`}
        />
      ))}
    </div>
  );
}
