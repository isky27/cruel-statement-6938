import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* ALl Routes supposed to add here */}
    </Routes>
  );
};
export default AllRoutes;
