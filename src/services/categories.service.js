import { categories } from "../data/categories";

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
  console.log("GET ALL CATEGORIES TEST", lang);
  console.log("GET ALL CATEGORIES TEST", categories);

  return categories.map((category) => ({
    ...category,
    title: category.titles[lang],
    description: category.descriptions[lang],
  }));
};
