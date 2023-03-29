import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const Links = () => (
  <Routes>
    <Route path="/" element={<Home />} exact />;
  </Routes>
);

export default Links;
