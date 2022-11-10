import './App.css';
import Checkout from './Cart/Checkout';
import {Routes,Route} from "react-router-dom"


function App() {
  return (
  <>
   <Routes>
    <Route path="/cart" element={ <Checkout />}></Route>
   </Routes>
  
  
  </>
  );
}

export default App;
