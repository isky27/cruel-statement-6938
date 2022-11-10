
import React from 'react';

import logo from "../logo.jpeg"
import "./checkout.css"

function CheckoutPage() {
  return (
    <>
    <div className='logo'>
     <img src={logo} alt="Skin And Care"  />
    </div>
    
      <div className="mainContainer">
        <div className='LeftSide'></div>
        <div className='RightSide'></div>
      </div>
      
    </>
  )
}

export default CheckoutPage

// git push origin fp04_371_Day_3