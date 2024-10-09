import { products } from "../assets/data/products";

export function getProductById(id, lang) {
  const product = products.find((product) => product.id === Number(id));
  if (product) {
    return { ...product, title: product.titles[lang] };
  }
  return null;
}

export function getProductsByCategory(category, lang) {
  const filteredProducts = products.filter(
    (product) => product.category[lang] === category
  );

  const normalizedLang = lang.slice(0, 2);

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
