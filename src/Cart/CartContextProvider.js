import React, { createContext, useState } from 'react'

export const CartContext= createContext()

function CartContextProvider({children}) {

    const [cartdata,setcartdata]= useState([]);
  
    function AddtoCart(elem)
    {
          setcartdata([...cartdata,{...elem,quantity:1}])
          console.log(elem);
    }
    
  return (
    <CartContext.Provider value={{cartdata,AddtoCart,setcartdata}} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider