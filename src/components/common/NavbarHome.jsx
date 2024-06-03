import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Feature from "./Feature";

const NavbarHome = () => {
    const [openFeature , setOpenFeature] = useState(false)
    const navigate = useNavigate('')
  return (
    <>
    <div className="bg-[#181A20] h-[64px] pl-4 flex items-center justify-between">
      <div className="flex items-center  gap-10">
        <div className="flex items-center gap-2 cursor-pointer"  onClick={()=>navigate('/')}>
          <img src="../Group 7.png" alt="" />
          <p className="text-[#F0B90B] text-[24px] font-[500]">Will Trade</p>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-[#EAECEF] font-[14px] cursor-pointer">Markets</p>
          <p className="text-[#EAECEF] font-[14px] cursor-pointer">Trade</p>
          <div className="flex items-center gap-2 text-[#EAECEF] font-[14px] cursor-pointer" onClick={()=> setOpenFeature(!openFeature)}>
            <p>Futures</p>
            <img src="../Vector (23).png" alt="" className="h-fit" />
          </div>
          <p className="text-[#EAECEF] font-[14px] cursor-pointer">Earn</p>
          <div className="flex items-center gap-2 text-[#EAECEF] font-[14px] cursor-pointer">
            <p>Square</p>
            <img src="../Vector (23).png" alt="" className="h-fit" />
          </div>
          <p className="text-[#EAECEF] font-[14px] cursor-pointer"  onClick={()=> navigate('/about')}>About</p>
        </div>
      </div>
      <div className="flex items-center gap-6 mr-10">
        <p className="text-[#EAECEF] font-[14px] cursor-pointer" onClick={()=> navigate('/login')}>Log In</p>
        <button className="bg-[#FCD535] text-[#202630] py-1 px-2 rounded-lg shadow shadow-[#00000040]" onClick={()=> navigate('/register')}>Sign Up</button>
      </div>
    </div>
    {openFeature &&  <Feature />}
    </>
  );
};

export default NavbarHome;
