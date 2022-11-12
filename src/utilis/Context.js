import React, { createContext, useReducer } from "react";
import { cartReducer, productReducer } from "./Reducers";
import data from "../Components/product.json";
export const Cartcontext = createContext();

const Context = ({ children }) => {
  const products = data;
  console.log("products-context", products);
  // console.log("data-context", data);
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: []
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: ""
  });

  return (
    <Cartcontext.Provider
      value={{ state, dispatch, productState, productDispatch }}
    >
      {children}
    </Cartcontext.Provider>
  );
};

export default Context;
