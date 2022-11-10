// import { DeleteIcon } from '@chakra-ui/icons';
import { Center, Text } from '@chakra-ui/react'
import React from 'react';
import "./Checkout.css"
import { DemoData } from "./DemoData";

import WeAccept from "./we.png"

function Checkout() {
  // console.log(DemoData)

  const deleteItem = () => {
    alert("loo")
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
              DemoData.map((item) => (
                <div className='PerItemDiv'>

                  <div className='imgDiv'>
                    <img src={item.image} alt={item.title} />
                  </div>

                  <div className='middleDiv'>
                    <p>{item.title}</p>

                    <div className='IncDec'>
                      <button>-</button>
                      <p> 1 </p>
                      <button>+</button>
                    </div>

                    <div className='DropDown'>
                      <select name="" id="" className='selectOption'>
                        <option value="">One-Time Purchase</option>
                        <option value="">PC Perks Subscription</option>
                      </select>
                    </div>
                  </div>

                  <div className='DeleteAndPrice'>
                    <i class="fa-solid fa-trash" onClick={deleteItem}></i>
                    <p> $ {item.price}.00</p>
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
              <p>$300.00</p>
              <p>Calculated At Checkout</p>
            </div>
          </div>

          <div className='Estimated_total'>
            <hr />
            <div >
              <h1 className='EstimatedText'> Estimated Total</h1>

            </div>

            <div>
              <p>$300.00</p>

            </div>

          </div>
          <h3 className='fourInterest' >
            4 interest-free payment of $98.50 with  <strong> klarna</strong>
          </h3>
          <p className='learn_more'>Learn More</p>
         <hr className='hrtag'/>
           <div className='promoCode'>
            <input type="text" />
            <button>APPLY </button>
           </div>


          <div className='btn-checkout'>
            <button className='Continue_btn'>CONTINUE SHOPPING </button> <br />
            <button className='Secure_btn'>SECURE CHECKOUT</button>
            <img src={WeAccept} alt="We Accept" srcset="" />
          </div>
        </div>


      </div>

    </>
  )
}

export default Checkout
