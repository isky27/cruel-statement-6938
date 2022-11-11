import React, { createContext, useEffect, useState } from 'react'

export const CartContext= createContext()

function CartContextProvider({children}) {
   
  const LocalStorageCartData=JSON.parse(localStorage.getItem("cartData"))||[]

    const [cartdata,setcartdata]= useState(LocalStorageCartData);
  
  function AddtoCart (product,title)
    {

      setcartdata([...cartdata,{...product,quantity:1}])
      
        
    }
    

    useEffect(()=>{
   localStorage.setItem("cartData",JSON.stringify(cartdata))

    },[cartdata])
    // console.log(LocalStorageCartData);

  return (
    <CartContext.Provider value={{cartdata,AddtoCart,setcartdata}} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider