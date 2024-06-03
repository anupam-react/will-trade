import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate('')
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center gap-12 my-[40px] ">
        <div className="w-[500px]">
          <p className="text-[#222126] font-bold text-[56px]">
            Buy, Sell & Trade Cryptocurrencies
          </p>
          <p className="text-[#686A6C] text-[20px] my-6">
            Securely buy crypto and earn rewards with Willtrade.com. Sign up
            today to trade Bitcoin for free on select pairs.
          </p>
          <div className="border border-[#E6E8EA] px-4 py-2 flex justify-between">
            <input
              type="text"
              placeholder="Enter your email address"
              className="text-[18px] px-4"
            />
            <button className="flex items-center gap-4 bg-[#F0B90B] shadow shadow-[#00000040] px-4 py-2 rounded-md" onClick={()=>navigate('/register')}>
              <p className="text-[#1E2026] font-semibold text-[15px]">
                Sign Up
              </p>
              <img src="../SVG (4).png" alt="" />
            </button>
          </div>
          <div className="flex gap-4 items-center bg-[#202025] px-[30px] w-fit py-4 rounded-xl mt-[60px]">
            <div>
              <p className="text-white text-[18px] font-bold">
                Download the <br />
                Well Trade app
              </p>
              <div className="flex gap-2 mt-6">
                <img src="../SVG (3).png" alt="" />
                <img src="../SVG (2).png" alt="" />
              </div>
            </div>
            <img
              src="../download-qr.png.png"
              alt=""
              className="w-[95px] h-[95px]"
            />
          </div>
        </div>
        <div className="">
          <img src="../hero-phone.png.png" alt="" />
        </div>
      </div>
      <div className="bg-[#F5F5F7]">
        <div className="py-5 text-[24px] flex justify-between gap-8 mr-[30px]">
          <p className="text-[#0B0E11]">
            $3,014.14 <span className="text-[#02C076]">(+3.88%)</span>
            <span>BNB</span>
          </p>
          <p className="text-[#0B0E11]">
            $3,014.14 <span className="text-[#02C076]">(+3.88%)</span>
            <span>BNB</span>
          </p>
          <p className="text-[#0B0E11]">
            $3,014.14 <span className="text-[#02C076]">(+3.88%)</span>
            <span>BNB</span>
          </p>
          <p className="text-[#0B0E11]">
            $3,014.14 <span className="text-[#02C076]">(+3.88%)</span>
            <span>BNB</span>
          </p>
          <button className="flex items-center gap-4 bg-[#F0B90B] shadow shadow-[#00000040] px-4 py-3 rounded-md">
            <p className="text-[#1E2026] font-semibold text-[15px]">
              Check Prices
            </p>
            <img src="../SVG (4).png" alt="" />
          </button>
        </div>
      </div>
      <div className="mt-10 mx-[15vw]">
        <p className="text-[56px] font-bold text-[#222126]">
          Buy Crypto In Minutes
        </p>
        <p className="text-[#686A6C] text-[20px] my-[60px]">
          Sign up today to buy and sell 150+ cryptocurrencies.
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className=" border-2 border-[#E6E8EA] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../Vector (24).png" alt="" />
            <p className="text-[#222126] text-[28px] font-bold text-center">
              Ready
            </p>
            <p className="w-[250px] text-[#686A6C] text-[20px] text-center">
              Create your free Binance.US account in seconds
            </p>
          </div>
          <div className=" border-2 border-[#E6E8EA] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../Vector (25).png" alt="" />
            <p className="text-[#222126] text-[28px] font-bold text-center">
              Set
            </p>
            <p className="w-[250px] text-[#686A6C] text-[20px] text-center">
              Make a deposit to your account
            </p>
          </div>
          <div className=" border-2 border-[#E6E8EA] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../Vector (26).png" alt="" />
            <p className="text-[#222126] text-[28px] font-bold text-center">
              Buy
            </p>
            <p className="w-[250px] text-[#686A6C] text-[20px] text-center">
              Buy crypto in a tap
            </p>
          </div>
        </div>
        <div className="flex justify-center my-[60px]">
          <button className="flex items-center gap-4 bg-[#F0B90B] shadow shadow-[#00000040] px-4 py-2 rounded-md" onClick={()=>navigate('/register')}>
            <p className="text-[#1E2026] font-semibold text-[15px]">Sign Up</p>
            <img src="../SVG (4).png" alt="" />
          </button>
        </div>
      </div>
      <div className="bg-[#222126] h-[124px] flex justify-between ">
        <div className="flex items-center gap-6">
          <img src="../dark-bg-left.png.png" alt="" className="h-[124px]" />
          <div>
            <p className="text-white text-[32px]">Be crypto confident</p>
            <p className="text-[#E6E8EA] text-[14px]">
              We maintain 1:1 reserves for all customer assets, so your funds
              are always safe, secure, and available.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="flex items-center gap-4 bg-[#FFFFFF] shadow shadow-[#00000040] px-4 py-3 rounded-md">
            <p className="text-[#1E2026] font-semibold text-[15px]">
              Learn More
            </p>
            <img src="../SVG (4).png" alt="" />
          </button>
          <img src="../dark-bg-right.png.png" alt="" className=" h-[124px] " />
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center gap-12">
        <div className="flex justify-center gap-10">
          <div className="w-[500px]">
            <p className="text-[#222126] text-[56px] font-bold">
              Trade like a pro
            </p>
            <p className="text-[#686A6C] text-[20px] py-[30px]">
              Make smarter trades with deep liquidity, powerful charting
              capabilities, and ultra-low fees you won’t find on other crypto
              exchanges. Our scalable trading solutions are built for everyone
              from active traders to institutional-grade API traders.
            </p>
            <button className="flex items-center gap-4 bg-[#F0B90B] shadow shadow-[#00000040] px-4 py-3 rounded-md">
              <p className="text-[#1E2026] font-semibold text-[15px]">
                Spot Trading
              </p>
              <img src="../SVG (4).png" alt="" />
            </button>
          </div>
          <div>
            <img src="../Container.png" alt="" />
          </div>
        </div>
        <div className="flex justify-center gap-10 mb-[60px]">
          <div>
            <img src="../Container (1).png" alt="" />
          </div>
          <div className="w-[500px]">
            <p className="text-[#222126] text-[56px] font-bold">
              Build Your Portfolio With Staking
            </p>
            <p className="text-[#686A6C] text-[20px] py-[30px]">
              Start staking ETH, BNB, and ADA, alongside 15+ Proof- of-Stake
              cryptocurrencies. Support your favorite projects and help secure
              their respective blockchain networks.
            </p>
            <button className="flex items-center gap-4 bg-[#F0B90B] shadow shadow-[#00000040] px-4 py-3 rounded-md">
              <p className="text-[#1E2026] font-semibold text-[15px]">
                Earn rewards
              </p>
              <img src="../SVG (4).png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center gap-12 mb-[50px]">
        <p className="text-[56px] font-bold text-[#222126]">
          Why Willtrade.com
        </p>
        <p className="text-[#686A6C] text-[20px] text-center w-[900px]">
          Unlike other crypto exchanges, we charge 0% transaction fees when you
          buy or trade Bitcoin on select pairs, and we offer some of the lowest
          fees on cryptocurrencies you love.
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className=" border-2  border-[#E6E8EA] shadow shadow-[#00000040] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../SVG (5).png" alt="" />
            <p className="text-[#222126] text-[24px] font-bold text-center pt-4">
              Simple
            </p>
            <p className="w-[250px] text-[#686A6C] text-[20px] text-center">
              Discover the easy way to buy, sell, trade, and stake crypto.
            </p>
          </div>
          <div className=" border-2  border-[#E6E8EA] shadow shadow-[#00000040] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../SVG (6).png" alt="" />
            <p className="text-[#222126] text-[24px] font-bold text-center pt-4">
              Secure
            </p>
            <p className="w-[250px] text-[#686A6C] text-[20px] text-center">
              Keep your crypto safe and secure with our industry-leading
              security program.
            </p>
          </div>
          <div className=" border-2  border-[#E6E8EA] shadow shadow-[#00000040] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../Vector (27).png" alt="" />
            <p className="text-[#222126] text-[24px] font-bold text-center pt-4">
              Rewarding
            </p>
            <p className="w-[250px] text-[#686A6C] text-[20px] text-center">
              Pocket more crypto with 0%-fee BTC trading* and double-digit
              staking rewards.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 bg-[#202025] flex flex-col justify-center items-center gap-12 pb-[60px]">
        <p className="text-[56px] font-bold text-white">
          Trusted By Millions Of People
        </p>
        <p className="text-[#686A6C] text-[20px] text-center w-[900px]">
          Unlike other crypto exchanges, we charge 0% transaction fees when you
          buy or trade Bitcoin on select pairs, and we offer some of the lowest
          fees on cryptocurrencies you love.
        </p>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="bg-[#292931] shadow shadow-[#FFFFFF0D] rounded-[12px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../SVG (7).png" alt="" />
            <p className="text-white text-[24px] font-bold text-center py-4">
              5,660+
            </p>
            <p className="w-[250px] text-[#76808F] text-[20px] text-center">
              5,660 convert trade pairs supported
            </p>
          </div>
          <div className="bg-[#292931] shadow shadow-[#FFFFFF0D] rounded-[12px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../SVG (8).png" alt="" />
            <p className="text-white text-[24px] font-bold text-center py-4">
              150+
            </p>
            <p className="w-[250px] text-[#76808F] text-[20px] text-center">
              Cryptocurrencies fully supported
            </p>
          </div>
          <div className="bg-[#292931] shadow shadow-[#FFFFFF0D] rounded-[12px] px-[50px] py-[30px] flex flex-col justify-center items-center">
            <img src="../SVG (9).png" alt="" />
            <p className="text-white text-[24px] font-bold text-center py-4">
              #1
            </p>
            <p className="w-[250px] text-[#76808F] text-[20px] text-center">
              Largest U.S. staking platform
            </p>
          </div>
        </div>
        <div className="flex justify-center my-[60px]">
          <button className="flex items-center gap-4 bg-[#F0B90B] shadow shadow-[#FFFFFF40] px-4 py-2 rounded-md" onClick={()=>navigate('/register')}>
            <p className="text-[#1E2026] font-semibold text-[15px]">Sign Up</p>
            <img src="../SVG (4).png" alt="" />
          </button>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center gap-12 mb-[50px]">
        <p className="text-[56px] font-bold text-[#222126]">
          Crypto Is Calling
        </p>
        <p className="text-[#686A6C] text-[20px] text-center w-[800px]">
          Join millions of customers on the best crypto platform for low fees.
          Sign up today and buy your first crypto in as little as 2 minutes.
        </p>
        <div className="flex justify-center my-[40px]">
          <button className="flex items-center gap-4 bg-[#F0B90B] shadow shadow-[#FFFFFF40] px-4 py-3 rounded-md" onClick={()=>navigate('/register')}>
            <p className="text-[#1E2026] font-semibold text-[15px]">Sign Up</p>
            <img src="../SVG (4).png" alt="" />
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className=" bg-[#FFFFFF01] border border-[#E6E8EA] shadow shadow-[#2020250D] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-between">
            <p className="w-[250px] text-[#0B0E11] text-[16px] text-left">
              So I am new in learning the crypto market and I feel, though this
              is a good place to start huge variety of tokens to choose from. So
              far it's been nice to understand this new market. Thanks to this
              platform and many others.
            </p>
            <div>
              <p className="text-[#0B0E11] py-6">Mike</p>
              <p className="text-[#777E91] text-[8px]">iOS User</p>
            </div>
          </div>
          <div className=" bg-[#FFFFFF01] border border-[#E6E8EA] shadow shadow-[#2020250D] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-between">
            <p className="w-[250px] text-[#0B0E11] text-[16px] text-left">
              By far the best customer service in crypto. No company is perfect.
              However if you run into an issue, CS acts as Angels and will lend
              you support with in a reasonable amount of time!
            </p>
            <div>
              <p className="text-[#0B0E11] py-6">Ardel</p>
              <p className="text-[#777E91] text-[8px]">iOS User</p>
            </div>
          </div>
          <div className=" bg-[#FFFFFF01] border border-[#E6E8EA] shadow shadow-[#2020250D] rounded-[24px] px-[50px] py-[30px] flex flex-col justify-between">
            <p className="w-[250px] text-[#0B0E11] text-[16px] text-left">
              The app is easy to use. I am not tech-savvy at all. And I am
              easily able to work my way through it. Thanks to the developers.
            </p>
            <div>
              <p className="text-[#0B0E11] py-6">Larry</p>
              <p className="text-[#777E91] text-[8px]">iOS User</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
