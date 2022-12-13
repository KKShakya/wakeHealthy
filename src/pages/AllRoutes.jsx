import React from "react";
import { Route, Routes } from "react-router-dom";
import Care from "./Care";
import Homepage from "./Homepage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/care" element={<Care/>}></Route>
    </Routes>
  );
};

export default AllRoutes;
