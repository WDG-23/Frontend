import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductCard } from "../components";
import { getProductsByCategory } from "../data/fakeStore";

const Categories = () => {
  const { category } = useParams();
  const [productsInCategory, setProductsInCategory] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const products = await getProductsByCategory(category);

        setProductsInCategory(products);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [category]);

  return (
    <div className="px-6">
      <h2 className="text-5xl">Products in {category}</h2>
      <section className="p-4 grid grid-cols-[repeat(auto-fill,minmax(24rem,1fr))]  gap-6 justify-center">
        {productsInCategory.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  );
};

export default Categories;
