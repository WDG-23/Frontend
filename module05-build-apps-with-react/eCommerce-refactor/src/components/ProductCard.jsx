import { Link } from "react-router";
import CartButtons from "./CartButtons";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="bg-white h-48 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain h-full w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.price.toFixed(2)} €</p>
        <div className="card-actions justify-end">
          <Link
            to={`categories/${product.category}`}
            className="underline hover:text-purple-500"
          >
            <button className="btn btn-primary">{product.category}</button>
          </Link>
          <CartButtons product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
