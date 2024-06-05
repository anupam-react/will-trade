import React from "react";

const OTC = () => {
  return (
    <div className="bg-[#F5F5F5] py-[30px] flex flex-col gap-[40px] justify-center items-center">
      <p className="text-center text-[#0B0E11] text-[45px]">
        OTC Trading Portal
      </p>
      <div className="bg-white shadow shadow-[#E6E8EA] rounded-md w-[60vw]">
        <p className="text-[20px] text-[#0B0E11] p-4">Request a Quote</p>
        <hr className="bg-[#E6E8EA] w-full"/>
        <div className="flex flex-col lg:flex-row gap-2">
           
        <div className="p-4 flex flex-col lg:flex-row ">
            <div className="w-[365px]">
          <div>
            <div className="flex justify-between">
              <p className="text-[#474D57] text-[12px] pb-2">From</p>
              <p className="text-[#76808F] text-[10px] pb-2">0 BTC</p>
            </div>
            <div className="border border-[#EAECEF] flex gap-2 py-2 px-4 rounded-[3px] ">
              <input
                type="text"
                value="min. 0.000004"
                className="text-[#757575] text-[20px] bg-transparent"
              />
              <div className="flex items-center gap-2">
                <p className="text-[#EAECEF]">|</p>
                <img
                  src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png"
                  alt=""
                />
                <p className="text-[#212833]">BTC</p>
                <img
                  src="../home-down.svg.png"
                  alt=""
                  className="w-fit h-fit"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <img src="../SVG (26).png" alt="" />
          </div>
          <div className="mb-10 w-full">
            <p className="text-[#474D57] text-[12px] pb-2">To</p>
            <div className="border border-[#EAECEF] flex gap-2 py-2 px-4 rounded-[3px] w-fit">
              <input
                type="text"
                value="min. 2"
                className="text-[#757575] text-[20px] bg-transparent"
              />
              <div className="flex items-center gap-2">
                <p className="text-[#EAECEF]">|</p>
                <img
                  src="../1d881354-8578-4993-bc2b-2f0d55cf5077.png.png"
                  alt=""
                  className="w-[25px]"
                />
                <p className="text-[#212833]">USD</p>
                <img
                  src="../home-down.svg.png"
                  alt=""
                  className="w-fit h-fit"
                />
              </div>
            </div>
          </div>
          <button className="flex justify-center items-center gap-2 text-[#202025] text-[14px] rounded-sm bg-[#E6E8EA] w-full py-2 my-[20px]">
            <p className="text-[#AEB4BC]">Preview Quote</p>
          </button>
            </div>
          <div className="border border-[#E6E8EA] mx-4"></div>
   
        </div>
       
        <div className="w-full flex flex-col justify-center items-center gap-6 px-6">
            <img src="../SVG (22).png" alt="" className="w-[96px]" />
            <p className="text-[#0B0E11] text-[14px] w-[280px] text-center">Please fill out the form to receive a
quote from one of our traders.</p>
        </div>

        </div>
      </div>
      <div className="bg-white shadow shadow-[#E6E8EA] rounded-md w-[60vw]">
      <p className="text-[18px] text-[#0B0E11] p-4 font-bold">OTC Trading</p>
        <hr className="bg-[#E6E8EA] w-full "/>
        <div className="my-10 px-6 flex flex-col gap-8">
            <div className="flex gap-6">
                <img src="../SVG (23).png" alt="" className="w-[64px] h-fit"/>
                <div>
                    <p className="text-[#1E2026] text-[18px] pb-3">What does OTC Trading mean?</p>
                    <p className="text-[#1E2026] text-[14px] w-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                </div>
            </div>
            <div className="flex gap-6">
                <img src="../SVG (24).png" alt="" className="w-[64px] h-fit"/>
                <div>
                    <p className="text-[#1E2026] text-[18px] pb-3">Is there a minimum trade amount?</p>
                    <p className="text-[#1E2026] text-[14px] w-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div>
            </div>
            <div className="flex gap-6">
                <img src="../SVG (25).png" alt="" className="w-[64px] h-fit"/>
                <div>
                    <p className="text-[#1E2026] text-[18px] pb-3">What are the fees?</p>
                    <p className="text-[#1E2026] text-[14px] w-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div>
            </div>
        </div>
        <hr className="bg-[#E6E8EA] w-full my-8 mx-6"/>
        <div className="px-6  flex flex-col lg:flex-row gap-6 mb-8">
            <div className="bg-[#FF9494] w-[250px] h-[140px] rounded-[4px]"></div>
            <div>
                <p className="text-[#232323] text-[18px] pb-4">What is WillTrade OTC Trading?</p>
                <p className="text-[#1E2026] text-[14px] w-[400px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OTC;
