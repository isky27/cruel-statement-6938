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
function AllRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
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
