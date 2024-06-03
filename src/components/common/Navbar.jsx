import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate('')
  return (
    <div className='bg-[#181A20] h-[64px] pl-4'>
        <div className='flex items-center h-full gap-2 cursor-pointer' onClick={()=>navigate('/')}>
            <img src="../Group 7.png" alt="" />
            <p className='text-[#F0B90B] text-[24px] font-[500]'>Will Trade</p>
        </div>
    </div>
  )
}

export default Navbar