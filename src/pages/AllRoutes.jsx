import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Products from "./SHOP/Products";
import SingleProduct from "./SHOP/ShopComponents/SingleProduct";
import ShopHome from "./SHOP/ShopHome";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/store" element={<ShopHome />} />
      <Route path="/store/products/:categeory" element={<Products />} />
      <Route
        path="/store/products/:categeory/:product_id"
        element={<SingleProduct />}
      />
    </Routes>
  );
};

export default AllRoutes;

