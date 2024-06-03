// Layout.js
import React from "react";
import Footer from "../components/common/Footer";
import NavbarHome from "../components/common/NavbarHome";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
    <NavbarHome />
    <div className=""><Outlet /></div>
    <Footer />
</div>
  );
};

export default Layout;
