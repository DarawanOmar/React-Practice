import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from './Context/DataContext'


const NavBar = () => {
  const[header,setHeader] = useState(false)
  const {setSearch  , search} = useContext(DataContext)

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 150 ? setHeader(true) : setHeader(false);
    })

    return () => window.removeEventListener("scroll",()=>{
      window.scrollY > 150 ? setHeader(true) : setHeader(false);
    })
  },[])
  return (


    <div className={`${header ? 'bg-black' : 'bg-sky-500'} flex flex-col md:flex-row justify-between   top-0 sticky `}>
        <form className='p-2' onSubmit={(e)=>e.preventDefault()}>
          <input type="text"
            className='bg-white p-3 w-full md:w-[25rem]'
            placeholder='Search'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </form>
        <div className={`flex  items-center space-x-8  font-serif text-white p-1`}>
            <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={'/'}>Home</Link>
            <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={"/newpost"}>New Post</Link>
            {/* <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={"/image"}>Add Photo</Link> */}
            <Link className='hover:bg-white hover:text-black px-4 py-3 duration-500 ' to={"/about"}>About</Link>
        </div>
    </div>
  )
}

export default NavBar