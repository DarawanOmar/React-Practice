import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from './Context/DataContext'


const NavBar = () => {

  const {setSearch  , search} = useContext(DataContext)
  return (


    <div className='flex flex-col md:flex-row justify-between bg-black top-0 sticky'>
        <form className="bg-black p-2" onSubmit={(e)=>e.preventDefault()}>
          <input type="text"
            className='bg-white p-3 w-full md:w-[25rem]'
            placeholder='Search'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </form>
        <div className="flex  items-center space-x-8 bg-black font-serif text-white p-1">
            <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={'/'}>Home</Link>
            <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={"/newpost"}>New Post</Link>
            {/* <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={"/image"}>Add Photo</Link> */}
            <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={"/about"}>About</Link>
        </div>
    </div>
  )
}

export default NavBar