import React from 'react'
import {HashLoader ,RingLoader} from 'react-spinners'



const Header = () => {

  return (
    <header className=' max-w-3xl mx-auto justify-between flex items-center bg-sky-500 text-white'>
        <div className='flex items-center font-bold'>
          <span> <RingLoader color='white' width={'1rem'} height={'4rem'}/> </span>
          <h1 className='  text-3xl font-serif p-6 flex'>  React  App Post</h1>
        </div>
        <span className='mr-4'> <HashLoader color='white'/></span>
    </header>
  )
}

export default Header