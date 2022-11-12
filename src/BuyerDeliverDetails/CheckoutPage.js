
import { Select } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



import logo from "../logo.jpeg"
import "./checkout.css";

const LocalStorageCartData = JSON.parse(localStorage.getItem("cartData")) || []

const initialtState={
  firstName:"",
  lastName:"",
  zipcode:"",
  city:""
}
function CheckoutPage() {

  let [totalPrice, setTotalPrice] = useState(1)
  //  console.log(LocalStorageCartData)

  const [DeliverDetails,setDeliverDetails]= useState(initialtState)

  const [formData,setFormdat]= useState([])

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
 setEnterGmail(enterGmail)

setEnterGmail("")

    
  }

  const handleAccount = () => {
    alert("Redirect To Signup Page")
  }

  const handleGmail = (value) => {
    setEnterGmail(value.target.value)
  }

  
  const finsihed = () => {
    alert("loo")
  }
 

const handleChange = (e) => {
  const { name, value } = e.target;

 setDeliverDetails({
    ...formData,
    [name]: value,
   
  });
};

// When Click 

const DeliverDetailshandle=()=>{
 setFormdat([...DeliverDetails,formData]);
  


}
console.log(formData)

 const {firstName,lastName,zipcode,city}= DeliverDetails;


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
           onChange={handleGmail}
            value={enterGmail} />

          <div className='createOrGuset'>
            <button className='guest' onClick={handleGuset}>CHECKOUT AS GUEST</button>
            <button className='account' onClick={handleAccount} >CREATE ACCOUNT</button>
          </div>

          <div className='shippingPaymentAndaccount'>


            <div className='ShippingDetails'>
              <h1 className='Contact'>Shipping </h1>


                    <div className='firstNameAndlastName'>
                      <div>
                        <div className='firstname'>
                          <h1 className='label'>First Name</h1>
                          <input type="text"
                            className='name'
                            value={firstName}
                            onChange={handleChange}
                            name="firstname"
                            placeholder='First Name'>

                          </input>

                        </div>
                        <div className='lastname'>
                          <h1 className='label'>Last Name</h1>
                          <input type="text"
                           value={lastName}
                           name="lastname"
                           onChange={handleChange}
                            placeholder='Last Name'
                            className='name'>

                          </input>
                        </div>
                      </div>

                    </div>

                    <div className='address12'>

                      <label className='Address'>Address 1</label> <br />
                      <input type="text" placeholder='Address 1'
                        className='AddressInput'
                      />

                      <label className='Address'>Address 2</label> <br />
                      <input type="text" placeholder='Address 2'
                        className='AddressInput'
                      />
                    </div>

                    <div className='citystatezip'>

                      <div>
                        <div className='city'>
                          <h1 className='label'>City</h1>
                          <input type="text"
                            className='name'
                            name="city"
                            value={city}
                            onChange={handleChange}
                            placeholder='City'>

                          </input>

                        </div>
                        <div className='state'>

                          <Select >
                            <option value='Assam'></option>
                            <option value='Assam'>Assam</option>
                            <option value='Kolkata'>Kolkata</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Gujrat'>Gujrat</option>
                            <option value='Kerela'>Kerela</option>
                          </Select>

                        </div>
                        <div className='zipcode'>
                          <h1 className='label'>Zip Code</h1>
                          <input type="number"
                            value={zipcode}
                            onChange={handleChange}
                            placeholder='Zip Code'
                            name="zipcode"
                            className='name'>

                          </input>
                        </div>


                      </div>


                    </div>

                    <div className='phoneNumber'>

                      <label className='Address'>Phone Number</label> <br />
                      <input type="number" placeholder='Phone number'
                        className='AddressInput'
                      />
                    </div>
                    <div className='SaveAndContinue'>
                      <button className='saveandcontinuebtn' onClick={DeliverDetailshandle}>SAVE & CONTINUE</button>
                    </div>
       
           

            </div>

            <div className='AccountDetails'>
              <div>
                <h1 className='Contact'>Payments</h1>
              </div>

              <div className='insideDiv'>

                <div className='CreditUsing'>
              
                        <div className='CreditCardTop' >
                          <input type="radio" className='creditecircle' />
                          <label>
                            <i class="fa-regular fa-credit-card"></i>
                            Credit Card </label>


                        </div>
                       
                        <div className='NameOntheCard'>
                          <label className='namecard'>Name on the card</label> <br />
                          <input type="text"
                            className='nameInput' />
                        </div>

                        <div className='cardnumber'>
                          <label className='namecard'>Card Number</label> <br />
                          <input type="text"
                            className='nameInput' />

                        </div>

                        <div className='expiration'>
                          <div>

                            <div className='expire'>
                              <Select >
                                <option value='Expiration'>Expiration</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                              </Select>


                            </div>
                            <div className='year'>

                              <Select >
                                <option value=''> Year</option>
                                <option value='2022'>2022</option>
                                <option value='2023'>2023</option>
                                <option value='2025'>2025</option>
                                <option value='2026'>2026</option>
                                <option value='2027'>2027</option>
                              </Select>

                            </div>
                            <div className='cvv'>
                              <h1 className='label'>CVV</h1>
                              <input type="number"
                                className='name'>

                              </input>
                            </div>


                          </div>
                        </div>
                        <h1 className='billinghead'>Billing Address</h1>
                        <div className='billingAdressas'>

                          <input type="radio" className='creditecircle' />
                          <label> Same as Shipping Address </label>
                          <h1> Full name city zipcode</h1>
                        </div>

                        <div className='saveandcontinue'>
                          <button className='saveandcontinuebtn' onClick={finsihed}>SAVE & CONTINUE</button>
                        </div>
                  

                </div>


                <div className='PaypalUsing'>

                  <input type="radio" />
                  <label >Paypal</label>

                </div>

                <div className='KlarnaUsing'>

                  <input type="radio" />
                  <label >Klarna</label>

                </div>



              </div>
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

