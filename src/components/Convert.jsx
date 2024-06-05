import React from "react";
import "../index.css";
import Accordion2 from "./common/Accordion2";
const Convert = () => {
    const items = [
        {
          title: 'What is convert?',
          content: 'Content for Item 1',
        },
        {
          title: 'Why use Convert?',
          content: 'Content for Item 1',
        },
        {
          title: 'How to convert crypto',
          content: 'Content for Item 1',
        },
        {
          title: 'How to convert crypto to USD',
          content: 'Content for Item 1',
        },
        {
          title: 'What are the minimum and maximum conversion amounts?',
          content: 'Content for Item 1',
        },
        {
          title: 'How many trading tokens and trading pairs does Binance Convert support?',
          content: 'Content for Item 1',
        },
        {
          title: 'How is crypto conversion different from buying crypto?',
          content: 'Content for Item 1',
        },
      
        
      ];
  return (
    <div className="py-[40px] px-[15vw]">
      <div className="flex flex-col lg:flex-row gap-[40px]">
        <div className="w-[30vw]">
          <p className="text-[24px] text-center">
            <span className="text-[#AEB4BC]">|</span> Convert
          </p>
          <p className="text-[#0B0E11] text-[46px] font-bold">
            WillTrade.com Crypto Converter
          </p>
          <p className="text-[#1E2026]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the{" "}
          </p>
          <button className="flex justify-center items-center gap-2 text-[#202025] text-[14px] rounded-sm bg-[#F0B90B] py-2 px-6 mt-6">
            <p className="">Sign Up and Convert</p>
            <img src="../Vector (28).png" alt="" />
          </button>
        </div>
        <div className="bg-convert">
          <div className="bg-white mx-[50px] my-[20px] rounded-md">
            <p className="text-[20px]  p-[20px]">Convert Calculator</p>
            <div className="border border-[#E6E8EA] p-0"></div>
            <div className="p-[20px] relative">
              <div>
                <p className="text-[#5E6673] pb-2">From</p>
                <div className="bg-[#FAFAFA] border border-[#FAFAFA] flex gap-2 py-4 px-4">
                  <input
                    type="text"
                    value="0"
                    className="text-[#757575] text-[20px] bg-transparent"
                  />
                  <div className="flex items-center gap-2">
                    <img
                      src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png"
                      alt=""
                    />
                    <p className="text-[#212833]">BTC</p>
                    <img src="../SVG (21).png" alt="" className="w-fit h-fit" />
                  </div>
                </div>
              </div>
              <div className="absolute top-26 left-1/2 bg-[#F0B90B] rounded-[40px] w-[36px] h-[36px] flex justify-center items-center">
                <img src="../SVG (19).png" alt="" />
              </div>
              <div className="mb-10">
                <p className="text-[#5E6673] pb-2">To</p>
                <div className="bg-[#FAFAFA] border border-[#FAFAFA] flex gap-2 py-4 px-4">
                  <input
                    type="text"
                    value="0"
                    className="text-[#757575] text-[20px] bg-transparent"
                  />
                  <div className="flex items-center gap-2">
                    <img
                      src="../b2a3e592-3659-4e5d-9ef6-474cb9f61963.png.png"
                      alt=""
                    />
                    <p className="text-[#212833]">ETH</p>
                    <img src="../SVG (21).png" alt="" className="w-fit h-fit" />
                  </div>
                </div>
              </div>
              <div className="px-[20px]">
                <button className="flex justify-center items-center gap-2 text-[#202025] text-[14px] rounded-sm bg-[#F0B90B] w-full py-2 my-[20px]">
                  <p className="text-[#1E2026">Log In to Convert</p>
                </button>
              </div>
              <div>
                <p className="text-[#929AA5] text-[12px] text-center">
                  Last updated 2024/05/17 06:08 (UTC)
                  <span className="text-[#0B0E11] text-[14px] underline pl-4">
                    Refresh
                  </span>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center flex flex-col justify-center items-center gap-4">
            <img src="../SVG (20).png" alt="" />
            <p className="text-[#202025] text-[20px] font-bold">0% Fees</p>
            <p className="text-[#686A6C]">
              Convert crypto or USD with no transaction fees.
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-4">
            <img src="../Vector (29).png" alt="" />
            <p className="text-[#202025] text-[20px] font-bold">Quick & Easy</p>
            <p className="text-[#686A6C]">
              Convert crypto or USD with no transaction fees.
            </p>
          </div>
          <div className="text-center flex flex-col justify-center items-center gap-4">
            <img src="../Vector (30).png" alt="" />
            <p className="text-[#202025] text-[20px] font-bold">Start Small</p>
            <p className="text-[#686A6C]">
              Begin converting from as little as 1 USDT.
            </p>
          </div>
        </div>
      </div>
      <div className="my-[60px] ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-[100px]">
            <img src="../hero-phone.png.png" alt="" className="h-[500px]"/>
            <div>
                <p className="text-[#202025] text-[42px] font-bold ">Convert 150+
Cryptocurrencies</p>
<p className="text-[#1E2026] pt-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            </div>
        </div>
      </div>
      <div>
        <p className="text-[#222126] text-[42px] font-bold text-center">Popular Cryptocurrency Pairs</p>

        <div className="my-10">
            <div className="flex justify-between gap-6 border border-x-0 border-t-0">
            <div className="flex justify-between items-center w-full border border-l-0 border-y-0 pr-4 pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Cardano To BTC</p>
                <div className="flex">
                    <img src="../38a3492b-162f-4973-938d-76c3ea8fb9bc.png.png" alt="" className="w-[48px] "/>
                    <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Bitcoin To USDT</p>
                <div className="flex">
                    <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className="w-[48px] "/>
                    <img src="../d27ee87e-b4c1-4556-a8d4-cf7d81593aae.png.png" alt="" className="w-[48px]  "/>
                </div>
            </div>

            </div>
            <div className="flex justify-between gap-6 border border-x-0 border-t-0 ">
            <div className="flex justify-between items-center w-full border border-l-0 border-y-0 pr-4 pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">BNB To BTC</p>
                <div className="flex">
                    <img src="../43e79bd4-37da-46d2-9311-42d2184b7f82.png.png" alt="" className="w-[48px] "/>
                    <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Ethereum To BTC</p>
                <div className="flex">
                    <img src="../b2a3e592-3659-4e5d-9ef6-474cb9f61963.png.png" alt="" className="w-[48px] "/>
                    <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>

            </div>
            <div className="flex justify-between gap-6 border border-x-0 border-t-0 ">
            <div className="flex justify-between items-center w-full border border-l-0 border-y-0 pr-4 pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">TetherUS To USD</p>
                <div className="flex">
                    <img src="../d27ee87e-b4c1-4556-a8d4-cf7d81593aae.png.png" alt="" className="w-[48px] "/>
                    <img src="../1d881354-8578-4993-bc2b-2f0d55cf5077.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Bitcoin To USDC</p>
                <div className="flex">
                    <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className="w-[48px] "/>
                    <img src="../753f4bd7-5f2a-48c7-93e0-35b9d23aa29e.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>

            </div>
            <div className="flex justify-between gap-6 border border-x-0 border-t-0 ">
            <div className="flex justify-between items-center w-full border border-l-0 border-y-0 pr-4 pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">BNB To ETH</p>
                <div className="flex">
                    <img src="../43e79bd4-37da-46d2-9311-42d2184b7f82.png.png" alt="" className="w-[48px] "/>
                    <img src="../b2a3e592-3659-4e5d-9ef6-474cb9f61963.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Solana To ETH</p>
                <div className="flex">
                    <img src="../183f6e62-0c73-4299-b82f-07e677afa041.png.png" alt="" className="w-[48px] "/>
                    <img src="../b2a3e592-3659-4e5d-9ef6-474cb9f61963.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>

            </div>
            <div className="flex justify-between gap-6 border border-x-0 border-t-0 ">
            <div className="flex justify-between items-center w-full border border-l-0 border-y-0 pr-4 pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Bitcoin To USD</p>
                <div className="flex">
                    <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className="w-[48px] "/>
                    <img src="../1d881354-8578-4993-bc2b-2f0d55cf5077.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Solana To USDT</p>
                <div className="flex">
                    <img src="../183f6e62-0c73-4299-b82f-07e677afa041.png.png" alt="" className="w-[48px] "/>
                    <img src="../d27ee87e-b4c1-4556-a8d4-cf7d81593aae.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>

            </div>
            <div className="flex justify-between gap-6 border border-x-0 border-t-0 ">
            <div className="flex justify-between items-center w-full border border-l-0 border-y-0 pr-4 pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">Ethereum To USD</p>
                <div className="flex">
                    <img src="../b2a3e592-3659-4e5d-9ef6-474cb9f61963.png.png" alt="" className="w-[48px] "/>
                    <img src="../1d881354-8578-4993-bc2b-2f0d55cf5077.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>
            <div className="flex justify-between items-center w-full pb-4 pt-2" >
                <p className="text-[#202025] text-[20px] font-bold">BNB To USD</p>
                <div className="flex">
                    <img src="../43e79bd4-37da-46d2-9311-42d2184b7f82.png.png" alt="" className="w-[48px] "/>
                    <img src="../1d881354-8578-4993-bc2b-2f0d55cf5077.png.png" alt="" className="w-[48px] "/>
                </div>
            </div>

            </div>
            <div className="flex justify-center w-full my-[50px]">
          <p className="border border-[#E6E8EA] px-6 py-2 text-[#1E2026] text-[14px]">  Start Converting</p>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className="w-[38vw]">
                    <p className="text-[#0B0E11] text-[42px] font-bold pb-6">Convert on the go</p>
                    <p className="text-[#1E2026] pb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    <div className="bg-[#F4F5F6] flex items-center gap-6 rounded-[12px] p-1">
                        <img src="../download-qr.png.png" alt="" />
                        <div className="flex flex-col gap-4">
                            <p className="text-[#202025] text-[23px] font-bold">Get the WillTrade App</p>
                            <p className="text-[#202025] text-[18px]">And do more with your money every day.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="../convertOnTheGO.png.png" alt="" />
                </div>
            </div>
            <div className='my-[100px] flex flex-col lg:flex-row gap-[150px] justify-center'>
            <div>
                <p className='text-[#2B2F36] text-[38px] font-bold'>Frequently Asked
Questions</p>

            </div>
        <Accordion2 items={items} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
