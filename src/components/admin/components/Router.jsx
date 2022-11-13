import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from"./Home";
import AddProduct from './product/AddProduct';
import EditProduct from './product/EditProduct';
import Products from './product/Products';
import CreateUser from './user/CreateUser';
import EditUser from './user/EditUser';
import Users from './user/Users'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/Users" element={<Users />}></Route>
      <Route path="/Users/edituser/:id" element={<EditUser />}></Route>
      <Route path="/Users/createuser" element={<CreateUser />}></Route>
      <Route path="/Products" element={<Products />}></Route>
      <Route path="/Products/editProduct/:id" element={<EditProduct />}></Route>
      <Route path="/Products/addProduct" element={<AddProduct/>}></Route>
    </Routes>
  );
}

export default Router
