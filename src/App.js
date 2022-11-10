import './App.css';

import {Routes,Route} from "react-router-dom"
import CheckoutPage from './BuyerDeliverDetails/CheckoutPage';
import Cart from './Cart/Cart';


function App() {
  return (
  <>
  <Routes>
    <Route path="/cart" element={  <Cart />}></Route>
    <Route path="/checkout" element={<CheckoutPage />}></Route>
  </Routes>
  
  
  </>
  );
}

export default App;
