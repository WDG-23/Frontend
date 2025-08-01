import { getProducts } from "../data/fakeStore";
import { CategoryList, ProductList } from "../components";
import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const allProducts = await getProducts();

        setProducts(allProducts);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <CategoryList />
      <ProductList products={products} />
    </div>
  );
};

export default Home;
