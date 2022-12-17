import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from "./Admin/Admin";

 import Care from "./Care/Care";
 import CareBooking from "./Care/CareBooking";


import FitnessHome from "./FitnessHome/FitnessHome";


import Homepage from "./Homepage";

import Products from "./shop/Products";
import SingleProduct from "./shop/ShopComponents/SingleProduct";
import ShopHome from "./shop/ShopHome";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/fitness" element={<FitnessHome/>} />

      <Route path="/care" element={<Care />}></Route>

      <Route path="/store" element={<ShopHome />} />
      <Route path="/store/products/:categeory" element={<Products />} />
      <Route
        path="/store/products/:categeory/:product_id"
        element={<SingleProduct />}
      />


      <Route path="/admin" element={<Admin />} />

   <Route path="/care/:Booking_id" element={<CareBooking />} /> 

    </Routes>
  );
};

export default AllRoutes;
