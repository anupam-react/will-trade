import React from "react";

import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";

const LogLayout = () => {
  return (
    <div className="">
        <Navbar />
        <div className=""><Outlet /></div>
        <Footer />
    </div>
  );
};

export default LogLayout;