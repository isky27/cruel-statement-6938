import { Route, Routes } from "react-router-dom";
import About from "./About";
import BestSeller from "./BestSeller";
import HairCare from "./HairCare";
import Home from "./Home";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import SignupCard from "./Singup";
import Skincare from "./Skincare";
import SpecialOffer from "./SpecialOffer";
import { RequireAuth } from "../Context/ReqAuth";
import Nomatch from "./Nomatch";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* ALl Routes supposed to add here */}
      <Route
        path="/skincare"
        element={
          <RequireAuth>
            <Skincare />
          </RequireAuth>
        }
      />
      <Route
        path="/best_seller"
        element={
          <RequireAuth>
            <BestSeller />
          </RequireAuth>
        }
      />
      <Route path="/haircare" element={<HairCare />} />
      <Route path="/about" element={<About />} />
      <Route path="/special_offer" element={<SpecialOffer />} />
      {/* Trial Login and SignUp Components */}
      <Route path="/signup" element={<SignupCard />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Nomatch />} />
    </Routes>
  );
};
export default AllRoutes;
