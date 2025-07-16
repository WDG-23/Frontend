export const addToCart = (product) => {
  const currCart = JSON.parse(localStorage.getItem("cart")) || [];
  const updatedCart = [...currCart, product];
  localStorage.setItem("cart", JSON.stringify(updatedCart));
};

// Alternative, damit das gleiche Item nicht mehrmals hinzugefügt wird. Stattdessen wird ein "count" Key erstellt, welcher prüft, wie oft ein Produkt zum "cart" hinzugefügt wurde.

// export const addToCart = (product) => {
//   const currCart = JSON.parse(localStorage.getItem("cart")) || [];
//   const existingItemIndex = currCart.findIndex(
//     (item) => item.id === product.id
//   );
//   let updatedCart;

//   if (existingItemIndex >= 0) {
//     updatedCart = [...currCart];
//     updatedCart[existingItemIndex] = {
//       ...updatedCart[existingItemIndex],
//       count: (updatedCart[existingItemIndex].count || 1) + 1,
//     };
//   } else {
//     updatedCart = [...currCart, { ...product, count: 1 }];
//   }

//   localStorage.setItem("cart", JSON.stringify(updatedCart));
//   return updatedCart;
// };
