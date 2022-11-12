import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Profile from "./Profile";
import { Login } from "./Login";
import { RequireAuth } from "../utilis/ReqAuth";
import SignupCard from "./Signup";
import BestSeller from "./Bestseller";
import Admin from "./Admin";
import Cart from "./Cart";
import HairCare from "./HairCare";
import Cart2 from "./Cart2";
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/haircare" element={<HairCare />} />
        <Route
          path="/products"
          element={
            <RequireAuth>
              <Products />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/best-seller"
          element={
            <RequireAuth>
              <BestSeller />
            </RequireAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart2 />
            </RequireAuth>
          }
        />
        {/* Authentication Components */}
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignupCard />} />
        {/* Admin Component */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}
export default AllRoutes;
