import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from './user/Users'


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Users/>}></Route>
    </Routes>
  );
}

export default Router
