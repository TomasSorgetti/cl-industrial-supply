import { categories } from "../assets/data/categories";

export const getCategoryById = (id, lang) => {
  const category = categories.find((category) => category.id === Number(id));
  if (category) {
    return {
      ...category,
      title: category.titles[lang],
      description: category.descriptions[lang],
    };
  }
  return null;
};

export const getAllCategories = (lang) => {
  return categories.map((category) => ({
    ...category,
    title: category.titles[lang],
    description: category.descriptions[lang],
  }));
};
