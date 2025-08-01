const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`);

  const data = await res.json();

  return data;
};

const getProductsByCategory = async (category) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );

  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`);

  const data = await res.json();

  return data;
};

const getCategories = async () => {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) throw new Error(`Something went wrong: ${res.status}`);

  const data = await res.json();

  return data;
};

export { getProducts, getProductsByCategory, getCategories };
