import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className='bg-neutral-100 h-screen max-w-7xl mx-auto'>
        <div className="flex items-center p-2">
                <Link to='/login' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-bold  '><Link to='/login'>Login</Link></h1>
            </div>

        <div className='max-w-7xl mx-auto'>
            <div className="text-center pt-10 text-lg font-bold p-1">
                Please Write Your Email For Processing Forgot Password
            </div>
            <div className="p-3">
                <input className='p-3 rounded-xl bg-white text-black w-full placeholder:text-center focus:outline-none text-center' type="text" placeholder='Write Email' />
            </div>
            <div className='p-3'>
                <button className='bg-indigo-500 text-white w-full p-3 text-lg rounded-lg'>Send </button>
            </div>
        </div>
    </div>
  )
}

export default ForgotPassword