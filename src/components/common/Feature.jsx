import React from 'react'

const Feature = () => {
  return (
    <div className='bg-[#F6F6F6] rounded-[30px] px-6 py-2 absolute left-[10vw]'>
        <div className='flex gap-6'>
            <div className='flex gap-6 border border-[#000000] rounded-[30px] px-6 py-2 w-[350px] h-[144px] cursor-pointer'>
                <img src="../simple-icons_convertio.png" alt="" className='w-[65px] h-[65px]' />
                <div>
                    <p className='text-[32px] font-[500]'>Convert</p>
                    <p className='text-[14px] pt-6'>TEXT</p>
                </div>
            </div>
            <div className='flex gap-6 border border-[#000000] rounded-[30px] px-6 py-2 w-[350px] h-[144px] cursor-pointer'>
                <img src="../SVG (17).png" alt="" className='w-[65px] h-[65px]' />
                <div>
                    <p className='text-[32px] font-[500]'>Spot Trading</p>
                    <p className='text-[14px] pt-6'>TEXT</p>
                </div>
            </div>
            <div className='flex gap-6 border border-[#000000] rounded-[30px] px-6 py-2 w-[350px] h-[144px] cursor-pointer'>
                <img src="../clarity_world-solid.png" alt="" className='w-[65px] h-[65px]' />
                <div>
                    <p className='text-[32px] font-[500]'>OTC</p>
                    <p className='text-[14px] pt-6'>TEXT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature