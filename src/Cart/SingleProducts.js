import React, { useContext } from 'react';
import { CartContext } from './CartContextProvider';

import { DemoData } from "./DemoData";
import "./s.css"
function SingleProducts() {

    const {AddtoCart}=useContext(CartContext)

    // console.log(AddtoCart)


  return (
    <div  className="sing">
      {
        DemoData.map((el)=>(
            <div key={el.id}>
                <img src={el.image} alt={el.title} srcset="" />
                <p>{el.title}</p>
                <button onClick={()=>AddtoCart(el,el.title)} >Add To Cart</button>
             </div>
        ))
      }
    </div>
  )
}

export default SingleProducts
