const BASE_URL = "https://fakestoreapi.com";

export async function getAllProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  return res.json();
}

export async function getProductById(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return res.json();
}

export async function createProduct(title, price, category) {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    body: JSON.stringify({ title, price, category }),
    headers: { "Content-Type": "application/json" }
  });
  return res.json();
}

export async function deleteProduct(id) {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE"
  });
  return res.json();
}