import React from "react";
import "../index.css";
import Accordion from "./common/Accordion";
const BuySell = () => {
    const items = [
        {
          title: 'What is cryptocurrency?',
          content: 'Content for Item 1',
        },
        {
          title: 'What is a blockchain?',
          content: 'Content for Item 2',
        },
        {
          title: 'What is a crypto exchange?',
          content: 'Content for Item 2',
        },
        {
          title: 'How do I buy crypto?',
          content: 'Content for Item 2',
        },
        {
          title: 'How do I sell crypto?',
          content: 'Content for Item 2',
        },
        {
          title: 'How do I convert crypto?',
          content: 'Content for Item 2',
        },
        {
          title: 'How do I buy, sell, and convert crypto on the WellTrade Mobile App?',
          content: 'Content for Item 2',
        },
        {
          title: 'How do I transfer crypto to WellTrade?',
          content: 'Content for Item 2',
        },
        {
          title: 'What are the fees for buying, selling, and converting crypto?',
          content: 'Content for Item 2',
        },
        // Add more items as needed
      ];
  return (
    <div>
      <div className="bg-[#0B0E11]">
        <div className="bg-sell ">
          <div className="ml-[15vw] pt-[100px] w-[300px] lg:w-[600px]">
            <div className="flex items-center gap-2 cursor-pointer">
              <img src="../Group 7.png" alt="" className="w-[42px] h-[42px]" />
              <p className="text-[#F0B90B] text-[24px] font-[500]">
                Will Trade
              </p>
            </div>
            <p className="text-white font-bold text-[56px]">
              Buy, Sell & Convert Cryptocurrency{" "}
            </p>
            <p className="text-white  text-[24px] pt-4 pb-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum
            </p>
            <button className="text-[#1E2026] text-[14px] rounded-md bg-[#F0B90B] py-2 w-[250px]">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center text-center gap-[100px] py-10">
          <div>
            <p className="text-[48px] text-white font-bold ">0%</p>
            <p className="text-[24px] text-white ">Bitcoin Trading Fee*</p>
            <p className="text-[24px] text-[#F0B90B] ">Fee Structure</p>
            <p className="text-[14px] text-white">*on select pairs</p>
          </div>
          <div>
            <p className="text-[48px] text-white font-bold">150+</p>
            <p className="text-[24px] text-white">Popular</p>
            <p className="text-[24px] text-white">Cryptocurrencies</p>
          </div>
          <div>
            <p className="text-[48px] text-white font-bold">200+</p>
            <p className="text-[24px] text-white">Convert</p>
            <p className="text-[24px] text-white">Trading Pairs</p>
          </div>
        </div>
        <div className="py-8">
          <img src="../coins_large_v4.png.png" alt="" />
        </div>
        <div className="bg-white mx-[10vw] rounded-md py-[30px] px-[50px] transform  translate-y-[300px] -mt-[300px]">
          <div className="flex justify-between gap-6">
            <table>
              <tr className="text-[#848E9C] font-[400]">
                <td className="pr-8">#</td>
                <td className="px-8">Cryptocurrency</td>
                <td className="px-8">Price</td>
                <td className="px-8">24h % Change</td>
              </tr>
              <tr className="">
                <td className="h-[100px]">1</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">Bitcoin</p>
                      <p className="text-[12px] text-[#76808F]">BTC/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  66,135.99
                </td>
                <td className="flex justify-center items-center h-[100px]">
                  <button className="bg-[#F84960] text-white rounded-md px-4 py-1">
                    -0.08%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">2</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../c7ac7f73-f2e4-49f2-b82c-a664960dcadb.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">SHIBA INU</p>
                      <p className="text-[12px] text-[#76808F]">SHIB/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  0.00002472
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#F84960] text-white rounded-md px-4 py-1">
                    -2.49%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">3</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../183f6e62-0c73-4299-b82f-07e677afa041.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">Solana</p>
                      <p className="text-[12px] text-[#76808F]">SOL/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  167.89
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#02C076] text-white rounded-md px-4 py-1">
                    +3.24%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">4</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../b2a3e592-3659-4e5d-9ef6-474cb9f61963.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">Ethereum</p>
                      <p className="text-[12px] text-[#76808F]">ETH/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  3,027.8
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#02C076] text-white rounded-md px-4 py-1">
                    +0.80%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">5</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../de1dcbc3-fd30-4634-b654-4c20d6045e56.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">Dogecoin</p>
                      <p className="text-[12px] text-[#76808F]">DOGE/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  0.15293
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#F84960] text-white rounded-md px-4 py-1">
                    -1.53%
                  </button>
                </td>
              </tr>
            </table>
            <table>
              <tr className="text-[#848E9C] font-[400]">
                <td className="pr-8">#</td>
                <td className="px-8">Cryptocurrency</td>
                <td className="px-8">Price</td>
                <td className="px-8">24h % Change</td>
              </tr>
              <tr className="">
                <td className="h-[100px]">6</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../43e79bd4-37da-46d2-9311-42d2184b7f82.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">BNB</p>
                      <p className="text-[12px] text-[#76808F]">BNB/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  575.1
                </td>
                <td className="flex justify-center items-center h-[100px]">
                  <button className="bg-[#F84960] text-white rounded-md px-4 py-1">
                    -1.10%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">7</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../6dd6efe5-94c3-478c-8b99-5ecb1d34d55a.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">Hedera Hashgraph</p>
                      <p className="text-[12px] text-[#76808F]">HBAR/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  0.1183
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#02C076] text-white rounded-md px-4 py-1">
                    +7.55%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">8</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../d701ef75-3b82-4aaa-95f3-90cf07f10416.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">FLOKI</p>
                      <p className="text-[12px] text-[#76808F]">FLOKI/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  0.1183
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#F84960] text-white rounded-md px-4 py-1">
                    -3.51%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">1</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../38a3492b-162f-4973-938d-76c3ea8fb9bc.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">Cardano</p>
                      <p className="text-[12px] text-[#76808F]">ADA/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  0.4793
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#02C076] text-white rounded-md px-4 py-1">
                    +5.39%
                  </button>
                </td>
              </tr>
              <tr className="">
                <td className="h-[80px]">1</td>
                <td>
                  <div className="flex justify-center gap-2 items-center">
                    <img
                      src="../7a882b24-eb59-48e6-8c9d-fd5177a990fb.png.png"
                      alt=""
                    />
                    <div>
                      <p className="text-[14px]">Ripple</p>
                      <p className="text-[12px] text-[#76808F]">XRP/USD</p>
                    </div>
                  </div>
                </td>
                <td className="text-[14px] text-center text-[#212833] font-bold">
                  0.5195
                </td>
                <td className="flex justify-center items-center h-[80px]">
                  <button className="bg-[#02C076] text-white rounded-md px-4 py-1">
                    +0.12%
                  </button>
                </td>
              </tr>
            </table>
            <p></p>
          </div>
          <p className="font-bold text-[#0B0E11] text-center text-[45px] py-4">
            Easily Buy, Sell & Convert Crypto
          </p>
        </div>
      </div>
      <div className="bg-[#F5F5F5] pt-[300px] pb-[200px]">
        <div className="flex justify-center gap-8 py-6">
          <div className="w-[500px] flex flex-col gap-6">
            <div className="flex items-center gap-4 ">
              <img src="../SVG (10).png" alt="" />
              <div>
                <div className="text-[#0B0E11] text-[22px] font-bold">
                  Choose From 150+ Cryptocurrencies
                </div>
                <div className="text-[#0B0E11]">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <img src="../SVG (11).png" alt="" />
              <div>
                <div className="text-[#0B0E11] text-[22px] font-bold">
                  Fund Your Account
                </div>
                <div className="text-[#0B0E11]">
                  It is a long established fact that a reader
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 ">
              <img src="../SVG (12).png" alt="" />
              <div>
                <div className="text-[#0B0E11] text-[22px] font-bold">
                  Convert With Zero Fees
                </div>
                <div className="text-[#0B0E11]">
                  It is a long established fact that a reader will be distract
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src="../iphone_14_pro.png.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#0B0E11] text-[45px] font-bold text-center w-[70vw]">
            Start Buying, Selling & Trading Crypto in as Little as 2 Minutes
          </p>
          <div className="flex gap-6 lg:w-[80vw] py-10">
            <div className="flex flex-col justify-center items-center text-center">
              <img src="../SVG (13).png" alt="" className="w-[80px] h-[80px]" />
              <p className="text-[#0B0E11] font-bold text-[24px]">
                Create Your Free Account
              </p>
              <p className="text-[#0B0E11]">
                Create your free account on the web or in the Binance.US app
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <img src="../SVG (14).png" alt="" className="w-[80px] h-[80px]" />
              <p className="text-[#0B0E11] font-bold text-[24px]">
                Verify Your Identity
              </p>
              <p className="text-[#0B0E11]">
                Complete Basic or Advanced Verification to secure your account
                and unlock cutting-edge features
              </p>
            </div>
            <div className="flex flex-col justify-center items-center text-center">
              <img src="../SVG (15).png" alt="" className="w-[80px] h-[80px]" />
              <p className="text-[#0B0E11] font-bold text-[24px]">
                Make Your First Trade
              </p>
              <p className="text-[#0B0E11]">
                Buy, sell, or convert crypto to start your crypto journey
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="text-[#1E2026] text-[14px] rounded-md bg-[#F0B90B] py-2 w-[300px]">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#0B0E11] text-white pt-[50px] pb-[200px] flex gap-[200px] items-center justify-center " >
        <div className="text-[38px] font-bold w-[400px]">Frequently Asked
Questions</div>
        <div>
        <Accordion items={items} />
        </div>
      </div>
    </div>
  );
};

export default BuySell;
