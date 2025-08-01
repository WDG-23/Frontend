const checkIfInCart = (cart, product) =>
  cart?.find((item) => product.id === item.id);

const calcCartCost = (cart) =>
  cart?.reduce((acc, item) => acc + item.price * item.quantity, 0);

const calcCartCount = (cart) =>
  cart?.reduce((acc, item) => acc + item.quantity, 0);

const addToCart = (cart, product) => {
  const prodInCart = checkIfInCart(cart, product);
  let updatedCart = [];

  if (!prodInCart) {
    const newItem = { ...product, quantity: 1 };
    updatedCart = [...cart, newItem];
  } else {
    updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

const removeFromCart = (cart, product) => {
  const prodInCart = checkIfInCart(cart, product);
  let updatedCart = [];

  if (prodInCart.quantity === 1) {
    updatedCart = cart.filter((item) => product.id !== item.id);
  } else {
    updatedCart = cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
    );
  }
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  return updatedCart;
};

export {
  addToCart,
  calcCartCost,
  calcCartCount,
  checkIfInCart,
  removeFromCart,
};
