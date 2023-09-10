import React from 'react'
import {TbGridDots} from 'react-icons/tb'
import {SlHome, SlSettings} from 'react-icons/sl'
import {VscBookmark} from 'react-icons/vsc'
import {MdFeedback} from 'react-icons/md'
import {BsHouseAddFill} from 'react-icons/bs'
import {AiOutlineUser} from 'react-icons/ai'
import { Link} from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {
  
  const [menu, setMenu] = useState(false)
  const handleMenu = () =>{
    setMenu(prev => !prev)
  }


  return (
    <div className='md:hidden max-w-7xl mx-auto fixed bottom-0 z-10 w-full'>
      {/* Menu */}
      <div className={menu ? "bg-indigo-500 text-white  p-4 max-w-max mx-auto rounded-xl  duration-500 ease-out" : "translate-y-96 ease-in duration-500"}>
      {menu && (
        <div className="flex space-x-6">
          <div onClick={handleMenu} className='flex items-center space-x-1'>
            <span className='text-lg text-white'><BsHouseAddFill/></span>
            <Link to='/addproperty'>Add Property</Link>
          </div>
          <div onClick={handleMenu} className='flex items-center space-x-1'>
            <span className='text-xl'><MdFeedback/></span>
            <Link to='/contact'>FeedBack</Link>
          </div>
          
        </div>
        )}
      </div>

    {/* Menu Bar */}
      <nav className='flex justify-between items-center px-4  bg-white'>
        <Link onClick={() => setMenu(false)} to='/home' className='text-2xl text-indigo-700 font-bold'><SlHome/></Link>
        <Link  onClick={() => setMenu(false)} to='/favoraiteproperties' className='text-2xl text-indigo-700 font-bold'><VscBookmark/></Link>
        <button onClick={handleMenu} className='text-2xl bg-gradient-to-b from-indigo-500  via-indigo-700  to-indigo-500 text-white rounded-full p-4 font-bold '><TbGridDots/></button>
        <Link onClick={() => setMenu(false)} to='/users' className='text-2xl text-indigo-700 font-bold'><AiOutlineUser/></Link>
        <Link onClick={() => setMenu(false)} to='/setting' className='text-2xl  text-indigo-700 font-bold'><SlSettings/></Link>
      </nav>
      

    </div>
  )
}

export default Navbar