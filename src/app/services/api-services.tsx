const baseURL = "http://20.121.217.47:5001";

export const getProducts = async () => {
  return await fetch(`${baseURL}/api/products`)
    .then((response) => response.json())
    .then((data) => data);
};
