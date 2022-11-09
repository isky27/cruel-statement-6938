import { Route, Routes } from "react-router-dom";
import Admin_Router from "./admin/Admin_Home.jsx";
import Users from "./admin/components/user/Users";
import Home from "./user/Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* ALl Routes supposed to add here */}
      <Route path="/admin" element={<Admin_Router />} />
      <Route path="/users" element={<Users/>}/>
    </Routes>
  );
};
export default AllRoutes;
