import { useOutletContext } from "react-router";
import { checkIfInCart, addToCart, removeFromCart } from "../utils/cartStorage";

const CartButtons = ({ product }) => {
  const { cart, setCart } = useOutletContext();

  const productInCart = checkIfInCart(cart, product);

  const handleAddToCart = () => {
    setCart((prevCart) => addToCart(prevCart, product));
  };

  const handleRemoveFromCart = () => {
    setCart((prevCart) => removeFromCart(prevCart, product));
  };

  return (
    <>
      {productInCart ? (
        <div className="flex gap-2 items-baseline">
          <button onClick={handleRemoveFromCart} className="btn btn-primary">
            -
          </button>
          <span>{productInCart.quantity}</span>
          <button onClick={handleAddToCart} className="btn btn-primary">
            +
          </button>
        </div>
      ) : (
        <button onClick={handleAddToCart} className="btn btn-primary">
          Add to cart
        </button>
      )}
    </>
  );
};

export default CartButtons;
