
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



import logo from "../logo.jpeg"
import "./checkout.css";

const LocalStorageCartData = JSON.parse(localStorage.getItem("cartData")) || []


function CheckoutPage() {

  let [totalPrice, setTotalPrice] = useState(1)
  //  console.log(LocalStorageCartData)

  const [state, setState] = useState(true)
  const [enterGmail, setEnterGmail] = useState([])

  const navigate = useNavigate()

  const handlePrice = () => {
    let ans = 0;
    LocalStorageCartData.map((item) => (ans += item.price * item.quantity));
    setTotalPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });



  const Edithandle = () => {
    navigate("/cart")
  }

  const handleGuset = () => {
    let Enter = enterGmail.includes("@");

    if (Enter) {
      alert("Please Enter Valid Email")
    } else {
      setState(false)
    }
  }

  const handleAccount = () => {
    alert("Redirect To Signup Page")
  }

  const handleGmail = (value) => {
    setEnterGmail(value.target.value)
  }



  return (
    <>
      <div className='logo'>
        <img src={logo} alt="Skin And Care" />
      </div>

      <div className="mainContainer">

        <div className='LeftSide'>
          <h1 className='Contact'>Contact</h1>
          <p className='where'>Where can we send your order receipt to?</p>
          <label className='email'>Email</label> <br />
          <input type="text" placeholder='Enter email'
            className='input'
            required onChange={handleGmail}
            value={enterGmail} />

          <div className='createOrGuset'>
            <button className='guest' onClick={() => handleGuset(enterGmail)}>CHECKOUT AS GUEST</button>
            <button className='account' onClick={handleAccount} >CREATE ACCOUNT</button>
          </div>

          <div className='shippingPayment'>
            <div>
              <h1 className='Contact'>Shipping
               {state? "": <p> Hello</p>}
              </h1>
            </div>
            <div>
              <h1 className='Contact'>Shipping</h1>
            </div>
          </div>
        </div>

        <div className='RightProduct'>
          <div className='top'>
            <h1>Order Summary</h1>
            <h1 onClick={Edithandle} >Edit</h1>
          </div>


          {
            LocalStorageCartData.map((item) => (
              <div className='MainItemDiv'>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <p> {item.title} </p>
                  <p> qty : {item.quantity} </p>
                </div>
                <div> ${item.price * item.quantity}.00 </div>
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
              <h1><span> TOTAL </span>  ({LocalStorageCartData.length} Items) </h1>
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