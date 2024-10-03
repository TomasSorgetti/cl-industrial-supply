import { products } from "../assets/data/products";

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));  
}
