import React from 'react'
import "../index.css";
import Accordion2 from './common/Accordion2';
const Staking = () => {
    const items = [
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        {
          title: '1. Headline 1',
          content: 'Content for Item 1',
        },
        
      ];
  return (
    <div>
        <div className='bg-staking'>
            <div className='ml-[15vw] w-[500px] pt-[100px]'>
            <p className='text-[56px] pb-[100px]'>Head Line</p>
            <p className='pb-[40px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
            <button className="flex justify-center items-center gap-2 text-[#202025] text-[16px] rounded-sm bg-[#F0B90B] py-2 w-[150px]">
           <p>Start Staking </p> 
            <img src="../SVG (4).png" alt="" />
            </button>

            </div>
        </div>
        <div className='mx-[15vw] mb-[100px]'>
            <p className='text-[#0B0E11] text-[56px] text-center pb-8'>Crypto Staking</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <img src="../Background+Border.png" alt="" />
                <img src="../Background+Border (1).png" alt="" />
                <img src="../Background+Border (2).png" alt="" />
                <img src="../Background+Border (3).png" alt="" />
                <img src="../Background+Border (4).png" alt="" />
                <img src="../Background+Border (5).png" alt="" />
                <img src="../Background+Border (6).png" alt="" />
                <img src="../Background+Border (7).png" alt="" />
                <img src="../Background+Border (8).png" alt="" />
                <img src="../Background+Border (9).png" alt="" />
                <img src="../Background+Border (10).png" alt="" />
                <img src="../Background+Border (11).png" alt="" />
                <img src="../Background+Border (12).png" alt="" />
                <img src="../Background+Border (13).png" alt="" />
                <img src="../Background+Border (14).png" alt="" />
                <img src="../Background+Border (15).png" alt="" />
                <img src="../Background+Border (16).png" alt="" />
                <img src="../Background+Border (17).png" alt="" />
                <img src="../Background+Border (18).png" alt="" />
                <img src="../Background+Border (20).png" alt="" />
                <img src="../Background+Border (21).png" alt="" />
            </div>
        </div>
        <div className='mx-[15vw] mb-[100px]'>
            <p className='text-[#0B0E11] text-[56px] text-center pb-8'>How Staking Works</p>
            <div className='flex flex-col lg:flex-row gap-4'>
                <div className='text-center border-2 border-[#E6E8EA] p-4 rounded-[24px] flex flex-col justify-center items-center  gap-4'>
                    <img src="../cold-storage.webp.png" alt="" />
                    <p className='text-[22px] font-bold '>Headline</p>
                    <p className='text-[#686A6C] text-[18px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                </div>
                <div className='text-center border-2 border-[#E6E8EA] p-4 rounded-[24px] flex flex-col justify-center items-center gap-4'>
                    <img src="../on-chain-staking.webp.png" alt="" />
                    <p className='text-[22px] font-bold '>Headline</p>
                    <p className='text-[#686A6C] text-[18px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                </div>
                <div className='text-center border-2 border-[#E6E8EA] p-4 rounded-[24px] flex flex-col justify-center items-center  gap-4'>
                    <img src="../rewards.webp.png" alt="" />
                    <p className='text-[22px] font-bold '>Headline</p>
                    <p className='text-[#686A6C] text-[18px]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                </div>
            </div>
        </div>
        <div className='mx-[15vw] mb-[100px] flex flex-col lg:flex-row gap-[150px] justify-center'>
            <div>
                <p className='text-[#2B2F36] text-[38px] font-bold'>Frequently Asked
Questions</p>
<button className="flex justify-center items-center gap-2 text-[#202025] text-[16px] rounded-sm bg-[#F0B90B] py-2 w-[150px] mt-6">
           <p className='font-bold'>Learn More</p> 
            <img src="../Vector (28).png" alt="" />
            </button>
            </div>
        <Accordion2 items={items} />
        </div>
        <div className='mx-[15vw] mb-[100px]'>
        <p className='text-[#0B0E11] text-[56px] text-center pb-8'>Explore More Offerings</p>
        <div className='flex flex-col lg:flex-row gap-4 justify-between'>
            <div className='border border-[#E6E8EA] flex flex-col justify-center items-center h-[300px] w-full'>
                <img src="../buy.webp.png" alt="" />
                <p className='text-[#222126] text-[22px] font-bold'>Buy</p>
            </div>
            <div className='border border-[#E6E8EA] flex flex-col justify-center items-center h-[300px]  w-full'>
                <img src="../convert.webp.png" alt="" />
                <p className='text-[#222126] text-[22px] font-bold'>Convert</p>
            </div>
            <div className='border border-[#E6E8EA] flex flex-col justify-center items-center h-[300px]  w-full'>
                <img src="../pay.webp.png" alt="" />
                <p className='text-[#222126] text-[22px] font-bold'>Pay</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Staking