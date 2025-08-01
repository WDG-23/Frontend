import { useState, useEffect } from "react";
import { getCategories } from "../data/fakeStore";
import { Link } from "react-router";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const allCategories = await getCategories();

        setCategories(allCategories);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <Link key={category} to={`/categories/${category}`}>
          <button className="btn btn-primary btn-outline ml-4">
            {category}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default CategoryList;
