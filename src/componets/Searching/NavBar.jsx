import React from 'react'
import {BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NavBar = ({ search ,setSearch}) => {

  const handelSubmit = (e)=>{
    e.preventDefault()
  }

  return (
    <div className='top-0 sticky bg-green-500 p-2 '>    
      <form onSubmit={handelSubmit} className=' flex'>
        <input className='w-full p-3 bg-white text-2xl text-black placeholder:text-2xl placeholder:text-black  text-center' 
        placeholder='Search Here..!' type="text" onChange={(e)=>setSearch(e.target.value)} value={search}/>
        <span className='text-white absolute right-8 text-3xl top-8 '><BsSearch/></span>
      </form>

      <nav className=" text-white">
          <ul className='flex justify-between items-center text-xl bg-green-500'>
            <Link to={'/'} className='px-4 py-3 hover:bg-white hover:text-black  cursor-pointer duration-500'>Home </Link>
            <Link to={'/addpost'} className='px-4 py-3 hover:bg-white hover:text-black  cursor-pointer duration-500'>Add Post </Link>
            <Link to={'/about'} className='px-4 py-3 hover:bg-white hover:text-black  cursor-pointer duration-500'>About </Link>

          </ul>
      </nav>

    </div>

  )
}

export default NavBar