import React from "react";
import { BrowserRouter } from "react-router-dom";
import Blog from "./pages/Blog";
import { Routes ,Route } from 'react-router-dom';
import Sobre from "./pages/Sobre";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blog/>} />
        <Route path="/sobre" element={<Sobre/>} />
      </Routes>
    </BrowserRouter>
  );
};
export default CustomRoutes;
