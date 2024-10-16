import { products } from "../assets/data/products";

export function getProductById(id, lang) {
  const normalizedLang = lang.slice(0, 2);
  const product = products.find((product) => product.id === Number(id));

  if (product) {
    return {
      ...product,
      title: product.titles[normalizedLang],
      description: product.descriptions[normalizedLang],
      category: product.category[normalizedLang],
    };
  }
  return null;
}

export function getProductsByCategory(category, lang) {
  const normalizedLang = lang.slice(0, 2);

  const filteredProducts = products.filter(
    (product) => product.category[normalizedLang] === category
  );

  if (filteredProducts.length > 0) {
    return filteredProducts.map((product) => ({
      ...product,
      title: product.titles[normalizedLang],
      description: product.descriptions[normalizedLang],
    }));
  } else {
    return null;
  }
}
