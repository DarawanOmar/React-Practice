import React from 'react'

const ForgotPassword = () => {
  return (
    <div className='bg-neutral-200 h-screen '>
        <div className='max-w-7xl mx-auto'>
            <div className="text-center pt-10 text-lg font-bold ">
                Please Write Your Email For Processing Forgot Password
            </div>
            <div className="p-3">
                <input className='p-3 rounded-xl bg-white text-black w-full placeholder:text-center focus:outline-none text-center' type="text" placeholder='Write Email' />
            </div>
            <div className='p-3'>
                <button className='bg-indigo-500 text-white w-full p-4 text-lg rounded-lg'>Send </button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword