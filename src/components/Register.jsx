import React from 'react'

const Register = () => {
  return (
    <div className='flex justify-center items-center h-[100%] py-[100px] bg-[#E9E9E9]'>
        <div>
        <p className='text-[64px] font-[300] text-center'>Get Started</p>
        <div className='mt-[40px] lg:w-[440px] bg-[#FFFFFF] rounded-[30px] px-[20px] pt-[20px] pb-[40px]'>
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
            <div className='mt-[20px] flex gap-6'>
                <input type="checkbox" name="" id="" className='w-[20px] h-[20px]'/>
                <p for="" className='w-[320px]'> I am over 18 years old and I have read, understand and agree to the <span className='text-[#F0B90B] underline'>
                Willtrade.com Terms of Use,
                    </span> Privacy Policy, and <span className='text-[#F0B90B] underline'>
                    Biometric Data Policy.
                </span></p>
            </div>
        <button className='bg-[#DADADA] text-[#909090] text-[24px] w-full mt-4 py-3 rounded-2xl'>Create Account</button>
        <p className='text-center pt-4'>Already have an account? <span  className='text-[#F0B90B] cursor-pointer'>Log In</span></p>
        </div>

        </div>
    </div>
  )
}

export default Register