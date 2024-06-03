import React from "react";
import "../index.css";
const About = () => {
  return (
    <div>
      <div className="bg-about flex flex-col gap-6 justify-center items-center ">
        <p className="text-[24px] text-white ">About Us</p>
        <p className="text-[56px] text-white font-bold">HEAD LINE</p>
      </div>
      <div className="mx-[15vw] mt-[50px] text-[#212833]">
        <p className="text-[28px] ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>

        <p className="py-[40px] text-[28px]">Head Line 2</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
        <p className="py-[40px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
        <p className="pb-[50px] text-[28px]">Head Line 2</p>
        <button className=" bg-[#F0B90B] shadow shadow-[#FFFFFF40] px-8 py-3 rounded-md">
          <p className="text-[#1E2026] font-semibold text-[15px]">
            See Careers
          </p>
        </button>
        <p className="py-[30px]">Lorem Ipsum is simply dummy text of the </p>
      </div>
    </div>
  );
};

export default About;
