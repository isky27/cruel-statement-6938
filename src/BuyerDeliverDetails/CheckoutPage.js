
import React from 'react';

import { DemoData } from '../Cart/DemoData';

import logo from "../logo.jpeg"
import "./checkout.css";


function CheckoutPage() {


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
                  <p> qty:1 </p>
                 </div>
                <div> ${item.price}.00 </div>
              </div>
            ))
           }
        </div>
      </div>
      
    </>
  )
}

export default CheckoutPage

// git push origin fp04_371_Day_3