import { ProductInterface } from "../interfaces/product-interface";

const baseURL = "http://172.172.145.21:5001";

// Products

export const getProducts = async () => {
  return await fetch(`${baseURL}/api/products`)
    .then((response) => response.json())
    .then((data) => data);
};

export const getProduct = async (id: number) => {
  return await fetch(`${baseURL}/api/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        productId: data.id_product,
        productName: data.name_product,
        price: data.price,
        picture: data.picture,
        description: data.description,
        category: data.name_category,
        categoryId: data.category_id,
      };
    });
};

export const postProduct = async (product: ProductInterface) => {
  return await fetch(`${baseURL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const updateProduct = async (id: number, product: ProductInterface) => {
  return await fetch(`${baseURL}/api/products/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((data) => data);
};

export const deleteProduct = async (id: number) => {
  return await fetch(`${baseURL}/api/products/${id}`)
    .then((response) => response.json())
    .then((data) => data);
};
