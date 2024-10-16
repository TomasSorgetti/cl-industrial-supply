import { categories } from "../assets/data/categories";

export const getCategoryById = (id, lang) => {
  const normalizedLang = lang.slice(0, 2);
  const category = categories.find((category) => category.id === Number(id));

  if (category) {
    return {
      ...category,
      title: category.titles[normalizedLang],
      description: category.descriptions[normalizedLang],
    };
  }
  return null;
};

export const getAllCategories = (lang) => {
  const normalizedLang = lang.slice(0, 2);

  return categories.map((category) => ({
    ...category,
    title: category.titles[normalizedLang],
    description: category.descriptions[normalizedLang],
  }));
};
