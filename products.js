import { getAllProducts, getProductById, createProduct, deleteProduct } from "./api.js";

export async function handleGet(resource) {
  if (resource.includes("/")) {
    const id = resource.split("/")[1];
    return getProductById(id);
  }
  return getAllProducts();
}

export async function handlePost(args) {
  const [title, price, category] = args;
  return createProduct(title, price, category);
}

export async function handleDelete(resource) {
  const id = resource.split("/")[1];
  return deleteProduct(id);
}
