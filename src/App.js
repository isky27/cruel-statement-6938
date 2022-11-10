import './App.css';
import Checkout from './Checkout/Checkout';
import {Routes,Route} from "react-router-dom"
import CheckoutPage from './BuyerDeliverDetails/CheckoutPage';


function App() {
  return (
  <>
  <Routes>
    <Route path="/cart" element={  <Checkout />}></Route>
    <Route path="/checkout" element={<CheckoutPage />}></Route>
  </Routes>
  
  
  </>
  );
}

export default App;
