import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col lg:flex-row justify-center gap-[50px] items-center h-[100%] py-[100px] bg-[#E9E9E9]'>
    <div className='mt-[40px] lg:w-[440px] bg-[#FFFFFF] rounded-[30px] px-[20px] pt-[20px] pb-[40px]'>
    <p className='text-[64px] font-[300] pb-6'>Log In</p>
        <div className='flex flex-col gap-[20px]'>
        <div className='flex flex-col gap-[10px] '>
            <label htmlFor="" className='text-[#737373] text-[20px]'>Email</label>
            <input type="text" className='border border-1 boder-[#737373] py-3 rounded-lg px-4'/>
        </div>
        <div className='flex flex-col gap-[10px] '>
            <label htmlFor="" className='text-[#737373] text-[20px]'>Password</label>
            <input type="text" className='border border-1 boder-[#737373] py-3 rounded-lg px-4'/>
        </div>

        </div>
        <div className='mt-[30px]'>
            <p className='text-[#F0B90B] text-[20px] underline'>Forgot Password?</p>
        </div>
    <button className='bg-[#F0B90B]  text-[24px] w-full mt-8 py-3 rounded-2xl'>Log In</button>
    <p className='text-center text-[20px] pt-8'>Don’t have an account? <span  className='text-[#F0B90B] cursor-pointer' onClick={()=> navigate('/')}>Get Started</span></p>
    </div>
    <div className='mt-[40px] lg:w-[440px] bg-[#FFFFFF] rounded-[30px] px-[20px] pt-[20px] pb-[40px]'>
      <div className='flex items-center gap-4'>
        <img src="../Group 16.png" alt="" />
        <img src="../phone.png.png" alt="" className='h-fit' />
      </div>
      <div className='mt-[20px]'>
        <p className='text-[48px] font-bold text-center pb-4'>QR Code Login</p>
        <p className='text-[24px] text-center'>1. Tap the scan icon in the upper right of
your app's home
</p>
<p className='text-[24px] text-center'>2. Scan the QR code above</p>
      </div>
    </div>

</div>
  )
}

export default Login