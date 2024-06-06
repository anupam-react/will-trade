import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Hot from './Hot'
import Forex from './Forex'
import Crypto from './Crypto'
import Metals from './Metals'
import Indices from './Indices'
import Stocks from './Stocks'

const Markets = () => {
    const [isActive , setIsActive] = useState(0)
  return (
    <div className='bg-[#181A20] px-[15vw] py-[20px]'>
        <p className='text-[#EAECEF] text-[32px] font-bold'>Markets Overview <span className='text-[#848E9C] text-[24px] pl-6'>Trading Data</span></p>
        <div className='flex justify-between gap-2 mt-6'>
            <div className='border border-[#2B3139] w-[17vw] rounded-[16px] py-2 px-3'>
                <div className='text-[#EAECEF] text-[12px] flex justify-between'>
                    <p>Hot Coins</p>
                    <div className='flex items-center gap-1'>
                    <p>More</p> 
                    <img src="../SVG (29).png" alt="" className='w-[15px]'/>
                </div>
                </div>
                <div className='flex flex-col gap-3 mt-4'>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../43e79bd4-37da-46d2-9311-42d2184b7f82.png.png" alt="" className='w-[24px]'/>
                            <p>BNB</p>
                    </div>
                    <p>$584.10</p>
                    <p className='text-[#0ECB81]'>+2.91%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className='w-[24px]'/>
                            <p>BTC</p>
                    </div>
                    <p>$66.24K</p>
                    <p className='text-[#0ECB81]'>+6.70%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../3a8c9fe6-2a76-4ace-aa07-415d994de6f0.png.png" alt="" className='w-[24px]'/>
                            <p>ETH</p>
                    </div>
                    <p>$3.01K</p>
                    <p className='text-[#0ECB81]'>+3.68%</p>
                </div>

                </div>
            </div>
            <div className='border border-[#2B3139] w-[17vw] rounded-[16px] py-2 px-3'>
                <div className='text-[#EAECEF] text-[12px] flex justify-between'>
                    <p>New Listing</p>
                    <div className='flex items-center gap-1'>
                    <p>More</p> 
                    <img src="../SVG (29).png" alt="" className='w-[15px]'/>
                </div>
                </div>
                <div className='flex flex-col gap-3 mt-4'>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../27776dc0-2561-405a-b365-79ee16a930b2.png.png" alt="" className='w-[24px]'/>
                            <p>BB</p>
                    </div>
                    <p>$0.4013</p>
                    <p className='text-[#0ECB81]'>+11.10%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../4c66b2cc-f9bf-4d8e-b572-5d157d02faff.png.png" alt="" className='w-[24px]'/>
                            <p>REZ</p>
                    </div>
                    <p>$66.24K</p>
                    <p className='text-[#0ECB81]'>+6.70%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../e407715b-c875-48f4-9626-df744491f6f7.png.png" alt="" className='w-[24px]'/>
                            <p>OMNI</p>
                    </div>
                    <p>$3.01K</p>
                    <p className='text-[#0ECB81]'>+3.68%</p>
                </div>

                </div>
            </div>
            <div className='border border-[#2B3139] w-[17vw] rounded-[16px] py-2 px-3'>
                <div className='text-[#EAECEF] text-[12px] flex justify-between'>
                    <p>Top Gainer Coin</p>
                    <div className='flex items-center gap-1'>
                    <p>More</p> 
                    <img src="../SVG (29).png" alt="" className='w-[15px]'/>
                </div>
                </div>
                <div className='flex flex-col gap-3 mt-4'>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../fca13cc6-3034-4136-a740-ecb8af48d53c.png.png" alt="" className='w-[24px]'/>
                            <p>PEOPLE</p>
                    </div>
                    <p>$584.10</p>
                    <p className='text-[#0ECB81]'>+34.77%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../1ca0e8c6-e5bc-4cf3-94ee-2a5621afff67.png.png" alt="" className='w-[24px]'/>
                            <p>CHR</p>
                    </div>
                    <p>$66.24K</p>
                    <p className='text-[#0ECB81]'>+32.77%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../94650447-45c9-417d-be69-e74073fcc149.png.png" alt="" className='w-[24px]'/>
                            <p>FTM</p>
                    </div>
                    <p>$3.01K</p>
                    <p className='text-[#0ECB81]'>+31.77%</p>
                </div>

                </div>
            </div>
            <div className='border border-[#2B3139] w-[17vw] rounded-[16px] py-2 px-3'>
                <div className='text-[#EAECEF] text-[12px] flex justify-between'>
                    <p>Top Volume Coin</p>
                    <div className='flex items-center gap-1'>
                    <p>More</p> 
                    <img src="../SVG (29).png" alt="" className='w-[15px]'/>
                </div>
                </div>
                <div className='flex flex-col gap-3 mt-4'>
             
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../e4416aac-6838-4230-958e-c871a57c32fe.png.png" alt="" className='w-[24px]'/>
                            <p>BTC</p>
                    </div>
                    <p>$66.24K</p>
                    <p className='text-[#0ECB81]'>+6.70%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../3a8c9fe6-2a76-4ace-aa07-415d994de6f0.png.png" alt="" className='w-[24px]'/>
                            <p>ETH</p>
                    </div>
                    <p>$3.01K</p>
                    <p className='text-[#0ECB81]'>+3.68%</p>
                </div>
                <div className='flex justify-between items-center text-[#EAECEF] text-[13px]'>
                    <div className='flex gap-2 items-center'>
                        <img src="../183f6e62-0c73-4299-b82f-07e677afa041.png.png" alt="" className='w-[24px]'/>
                            <p>SOL</p>
                    </div>
                    <p>$163.38</p>
                    <p className='text-[#0ECB81]'>+2.91%</p>
                </div>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between my-6'>
        <div className='flex gap-12 text-[#848E9C]'>
            <p className={isActive === 10 ? 'text-[#FFFFFF] border-b-2 border-b-[#FCD535] font-bold' : 'text-[#848E9C] font-bold ' }>Favorites</p>
            <p className={isActive === 0 ? 'text-[#FFFFFF] border-b-2 border-b-[#FCD535] font-bold cursor-pointer' : 'text-[#848E9C] font-bold cursor-pointer' } onClick={()=> setIsActive(0)}>Hot</p>
            <p className={isActive === 1 ? 'text-[#FFFFFF] border-b-2 border-b-[#FCD535] font-bold cursor-pointer' : 'text-[#848E9C] font-bold cursor-pointer' } onClick={()=> setIsActive(1)}>Forex<span className='font-normal ml-2 px-1 pb-[2px] rounded-sm bg-[#2B3139] text-[12px] text-[#F0B90B]'>New</span></p>
            <p className={isActive === 2 ? 'text-[#FFFFFF] border-b-2 border-b-[#FCD535] font-bold cursor-pointer' : 'text-[#848E9C] font-bold cursor-pointer' } onClick={()=> setIsActive(2)}>Crypto</p>
            <p className={isActive === 3 ? 'text-[#FFFFFF] border-b-2 border-b-[#FCD535] font-bold cursor-pointer' : 'text-[#848E9C] font-bold cursor-pointer' } onClick={()=> setIsActive(3)}>Metals</p>
            <p className={isActive === 4 ? 'text-[#FFFFFF] border-b-2 border-b-[#FCD535] font-bold cursor-pointer' : 'text-[#848E9C] font-bold cursor-pointer' } onClick={()=> setIsActive(4)}>Indices</p>
            <p className={isActive === 5 ? 'text-[#FFFFFF] border-b-2 border-b-[#FCD535] font-bold cursor-pointer' : 'text-[#848E9C] font-bold cursor-pointer' } onClick={()=> setIsActive(5)}>Stocks</p>
        </div>
        <img src="../SVG (27).png" alt="" className='h-fit' />
        </div>
        {isActive === 0 && <Hot />}
        {isActive === 1 && <Forex />}
        {isActive === 2 && <Crypto />}
        {isActive === 3 && <Metals />}
        {isActive === 4 && <Indices />}
        {isActive === 5 && <Stocks />}
    </div>
  )
}

export default Markets