
import React, { useEffect, useState } from 'react';

import { DemoData } from '../Cart/DemoData';

import logo from "../logo.jpeg"
import "./checkout.css";


function CheckoutPage() {

  let [totalPrice, setTotalPrice] = useState(1)

  
  const handlePrice = () => {
    let ans = 0;
    DemoData.map((item) => (ans += item.price ));
    setTotalPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });


  return (
    <>
    <div className='logo'>
     <img src={logo} alt="Skin And Care"  />
    </div>
    
      <div className="mainContainer">

        <div className='LeftSide'>
          <h1 className='Contact'>Contact</h1>
          <p className='where'>Where can we send your order receipt to?</p>
          <label className='email'>Email</label> <br />
          <input type="text" placeholder='Enter email' className='input'/>
          <div className='createOrGuset'>
          <button className='guest'>CHECKOUT AS GUEST</button>
          <button className='account'>CREATE ACCOUNT</button>
          </div>

         <div className='shippingPayment'>
         <h1 className='Contact'>Shipping</h1>
          <h1 className='Contact'>Payment</h1>
         </div>
        </div>

        <div className='RightProduct'>
           <div className='top'> 
             <h1>Order Summary</h1>
             <h1>Edit</h1>
           </div>


           {
            DemoData.map((item)=>(
              <div className='MainItemDiv'> 
                <div> 
                  <img src={item.image} alt={item.title}  />
                </div>
                <div> 
                  <p> {item.title} </p>
                  <p> qty : 1 </p>
                 </div>
                <div> ${item.price}.00 </div>
              </div>
            ))
           }
       
           <div className='SubTotal'>
             <div>
              <h1>Subtotal</h1>
              <h1>Estimated Tax</h1>
              <h1>Shipping</h1>
             </div>

             <div>
               <h1>${totalPrice}.00 </h1>
               <h1>---</h1>
               <h1>---</h1>
             </div>
           </div>

           <div className='TotalItemandPrice'>
             <div>
              <h1><span> TOTAL </span>  ({DemoData.length} Items) </h1>
             </div>

             <div>
               <h1>${totalPrice}.00 </h1>
             </div>
           </div>


        </div>
      </div>
      
    </>
  )
}

export default CheckoutPage

// git push origin fp04_371_Day_3