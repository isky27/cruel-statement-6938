import { useState } from "react";
import Product from "./ProductChild/Product";

const Products = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const addToCart = (elem) => {
    setCart([...cart, { ...elem, quantity: 1 }]);
  };
  console.log("cart", cart);
  return (
    <>
      <Product addToCart={addToCart} />
    </>
  );
};
export default Products;
