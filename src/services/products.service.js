import { products } from "../data/products";

export function getProductById(id, lang) {
  const product = products.find((product) => product.id === Number(id));
  if (product) {
    return { ...product, title: product.titles[lang] };
  }
  return null;
}
