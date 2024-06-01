import React from 'react'
import '../../index.css'
const Footer = () => {
  return (
    <div className='bg-[#0B0E11] pt-[50px]'>
        <div className='px-[10vw]'>
        <div className='flex flex-col lg:flex-row justify-between gap-4 pb-5'>
            <div className='flex gap-[5vw]'>
                <div>
                <p className='text-white font-bold text-[17px] pb-4'>Company</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Trust</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>About US</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Blog</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Announcements</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Licenses</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Careers</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Terms of Use</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Privacy Policy</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Cookie Policy</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Law Enforcement <p>Guide</p> </p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Do Not Sell My
                    <p>Personal</p>
                    Information
                    </p>
                </div>
                <div>
                <p className='text-white font-bold text-[17px] pb-4'>Products</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Buy & Sell</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Convert</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Spot Trading</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>OTC</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Staking</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Pay</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Institutions</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Crypto Domains</p>
                    
                </div>
                <div>
                <p className='text-white font-bold text-[17px] pb-4'>Support</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Help Center</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Tax</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Fees</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Trading Rules</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Trade Limits</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Listing on</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Willtrade.com</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>API Documentation</p>
                    <p className='text-[#848E9C] text-[14px] pb-2'>Status</p>
                    
                </div>
            </div>
            <div className='flex flex-col justify-between'>
                <div className='flex gap-4 items-center bg-[#2F2F33] pl-[40px] pr-[30px] py-4 rounded-xl'>
                    <div>
                    <p className='text-white text-[18px] font-bold'>Download the <p>Willtrade.com App</p>  </p>
                    <div className='flex gap-2 mt-6'>
                        <img src="../SVG (3).png" alt="" />
                        <img src="../SVG (2).png" alt="" />
                    </div>
                    </div>
                    <img src="../download-qr.png.png" alt="" />
                </div>
                <div className='flex justify-end gap-2'>
                    <img src="../Item → Link - Facebook → SVG.png" alt="" />
                    <img src="../Item → Link - Twitter → SVG.png" alt="" />
                    <img src="../Item → Link - Linkedin → SVG.png" alt="" />
                    <img src="../Item → Link - Telegram → SVG.png" alt="" />
                    <img src="../Item → Link - Youtube → SVG.png" alt="" />
                    <img src="../Item → Link - Instagram → SVG.png" alt="" />
                    <img src="../Item → Link - Reddit → SVG.png" alt="" />
                    <img src="../Item → Link - Discord → SVG.png" alt="" />
                    <img src="../Item → Link - Tiktok → SVG.png" alt="" />
                </div>
            </div>
        </div>
       <hr className='bg-[#F2F2F2]'/>
        </div>
        <div className='pl-[10vw] pr-[20px] pb-[30px] pt-[14px] flex items-center gap-2 justify-between'>
            <div className='flex items-center gap-[5vw]'>
        <div className='flex items-center h-full gap-2'>
            <img src="../Group 7.png" alt="" />
            <p className='text-[#F0B90B] text-[24px] font-[500]'>Will Trade</p>
        </div>
         <p className='text-[#848E9C] text-[12px]'>© 2024 BAM Trading Services Inc. d.b.a.</p>
         <p className='text-[#848E9C] text-[12px]'>WillTrade.com - All rights reserved.</p>
            </div>
            <div className='bg-chart flex items-center py-2 px-4 rounded-3xl gap-2'>
                <img src="../Vector (22).png" alt="" />
                <p>Help</p>
            </div>
        </div>
    </div>
  )
}

export default Footer