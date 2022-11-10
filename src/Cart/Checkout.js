// import { DeleteIcon } from '@chakra-ui/icons';
import { Center, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from './CartContextProvider';
import "./Checkout.css"

import IncDec from './IncDec';
import SingleProducts from './SingleProducts';


import WeAccept from "./we.png"

function Checkout() {

  const { cartdata, setcartdata } = useContext(CartContext)

  console.log(cartdata)


  const [totalPrice, setTotalPrice] = useState(1)

  const [input, setInput] = useState("")

  const deleteItem = (id) => {
    const UpdatedData = cartdata.filter((el) => el.id !== id)
    setcartdata(UpdatedData)
  }



  function quantityModify(id, howMuchIncDecInOneClick) {

    const updatedData = cartdata.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + howMuchIncDecInOneClick } : item
    );
    setcartdata(updatedData);
    handlePrice();
  }

 


  const handlePrice = () => {
    let ans = 0;
    cartdata.map((item) => (ans += item.price * item.quantity));
    setTotalPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });

  console.log(totalPrice)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const Couponhandle = (input) => {
    if(totalPrice<50){
      alert("Total Price Should Be More Than $50")
    } else if(input!=="masai30"){
      alert("Coupon Code Not Valid")
    } else if(input==="masai30"){
       setTotalPrice(totalPrice/10)
     alert(totalPrice)
       
    }
  }

  const ContinueShopping = () => {
    alert("Continue Shopping")
  }



  const SecurePayment = () => {
    alert("Secure payment")
  }



  return (
    <>
      <Center h='100px' color="teal.700" fontSize={{ base: "1rem", md: "1.5rem", lg: "1.5rem" }}>
        REVIEW YOUR BAG
      </Center>

      <div className='Main_CheckoutDiv'>

        <div>

          <div className='PerksDiv'>
            <Center color='black' fontSize={{ base: "12px", md: "15px", lg: "20px" }} p={{ base: "5px", md: "10px", lg: "15px" }}>
              PC PERKS
            </Center>
            <Center color='black' fontSize={{ base: "10px", md: "10px", lg: "15px" }} >
              Subscribe & Save $39.00!
            </Center>
            <Center color='black' fontSize={{ base: "10px", md: "10px", lg: "15px" }} >
              Limited Time Only! Join PC Perks For Free To 10% + Get Free Shipping on order $80
            </Center>
            <Center color='black' fontSize={{ base: "10px", md: "10px", lg: "15px" }} >
              View More
            </Center>
            <button className='Add_Membership'>ADD MEMBERSHIP - FREE</button>
            <Text fontSize="13px" p="10px" >*For more details about PC Perks, we recommanded visitiong Privecy Policy and Terms & Conditions </Text>


          </div>

          <div className='ProductsDiv'>

            {
              cartdata.map((item) => (
                <div className='PerItemDiv' key={item.id}>

                  <div className='imgDiv'>
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className='middleDiv'>
                    <p>{item.title}</p>

                    <div className='IncDec'>
                      <IncDec quantityModify={quantityModify} id={item.id} />
                    </div>

                    <div className='DropDown'>
                      <select name="" id="" className='selectOption'>
                        <option value="">One-Time Purchase</option>
                        <option value="">PC Perks Subscription</option>
                      </select>
                    </div>
                  </div>

                  <div className='DeleteAndPrice'>
                    <i class="fa-solid fa-trash" onClick={() => deleteItem(item.id)}></i>
                    <p> $ {item.price * item.quantity}.00</p>
                  </div>

                </div>
              ))
            }

          </div>
        </div>

        <div>

          <div className='Left_Upper'>
            <h1>ORDER SUMMARY</h1>

            <div className='leftTag'>
              <p> SUBTOTAL</p>
              <p> SHIPPING</p>
            </div>

            <div>
              <p>${totalPrice}</p>
              <p>Calculated At Checkout</p>
            </div>
          </div>

          <div className='Estimated_total'>
            <hr />
            <div >
              <h1 className='EstimatedText'> Estimated Total</h1>

            </div>

            <div>
              <p>${totalPrice}</p>

            </div>

          </div>
          <h3 className='fourInterest' >
            4 interest-free payment of $98.50 with  <strong> klarna</strong>
          </h3>
          <p className='learn_more'>Learn More</p>
          <hr className='hrtag' />
          <div className='promoCode'>
            <input type="text" placeholder='Apply Coupon (masai30)' value={input} onChange={handleChange} />
            <button onClick={()=>Couponhandle(input)}>APPLY </button>
          </div>


          <div className='btn-checkout'>
            <button className='Continue_btn' onClick={ContinueShopping}>CONTINUE SHOPPING </button> <br />
            <button className='Secure_btn' onClick={SecurePayment}>SECURE CHECKOUT</button>
            <img src={WeAccept} alt="We Accept" />
          </div>
        </div>


      </div>
      <SingleProducts />
    </>
  )
}

export default Checkout
