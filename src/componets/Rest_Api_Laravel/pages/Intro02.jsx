import React from 'react'
import intro02 from '../img/intro02.svg'
import { Link } from 'react-router-dom'

const Intro02 = () => {
  return (
    <div className='max-w-7xl mx-auto flex flex-col'>
    <img src={intro02} className='md:max-h-[600px]' alt="Intro01" />
    <h1 className='text-center font-bold text-2xl p-3 md:text-5xl md:mt-10'>Sale Your Product</h1>
    <div className="flex justify-between items-center space-x-32 mt-16 p-8 pb-16 ">
        <Link to='/login' className='text-lg md:text-2xl'>Skip</Link>
        <Link to='/login' className='text-blue-500 text-lg md:text-2xl'>Next</Link>
    </div>
</div>
  )
}

export default Intro02