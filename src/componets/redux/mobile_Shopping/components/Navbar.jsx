import React from 'react'
import { useSelector } from 'react-redux'
import Shop from '../icons/icon'
const Navbar = () => {

    const {amount} = useSelector((store)=> store.carts)


  return (
    <div>
        <div className='top-0 z-10 sticky bg-indigo-500  flex justify-between items-center font-serif py-5 px-3'>
            <div>
                <h1 className='text-white text-3xl '> Redux Tolkit</h1>
            </div>
            <div>
                <div className='relative '>
                    <h1 className=' text-white'>< Shop /></h1>
                    <h1 className='absolute top-0 right-1 bg-indigo-300 text-white w-[20px] text-center  rounded-full '> {amount} </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar