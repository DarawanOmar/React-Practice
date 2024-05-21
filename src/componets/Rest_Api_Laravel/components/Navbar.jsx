import React, { useEffect } from 'react'
import {SlHome, SlSettings} from 'react-icons/sl'
import {VscBookmark} from 'react-icons/vsc'
import {BsHouseAddFill, BsMoonStarsFill, BsFillSunFill} from 'react-icons/bs'
import {AiOutlineUser, AiFillSetting} from 'react-icons/ai'
import {MdPlaylistAdd, MdOutlinePassword, MdPrivacyTip, MdFeedback} from 'react-icons/md'
import {TiPlus} from 'react-icons/ti'
import {BiMenuAltRight} from 'react-icons/bi'
import {FaUserAlt, FaHeart, FaHome} from 'react-icons/fa'
import {ImUsers} from 'react-icons/im'
import {RiLogoutBoxFill} from 'react-icons/ri'
import {HiSun} from 'react-icons/hi'
import {SiHomeassistantcommunitystore} from 'react-icons/si'
import { Link,  useNavigate} from 'react-router-dom'
import { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import axios from 'axios'
import apartment from '../img/Apartment-128x128.png'
import { useDispatch, useSelector } from 'react-redux'
import {dark, light} from '../features/Dark-Mode/DarkModeSlice'
import { motion } from "framer-motion";

const Navbar = () => {
  
  const [menu, setMenu] = useState(false)
  const [menuBig, setMenuBig] = useState(false)
  const navigate = useNavigate();
  const{isDark} = useSelector((state) => state.dark)
  const dispatch = useDispatch()
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  const handleMenu = () =>{
    setMenu(prev => !prev)
  }
  const handleLogout = async () => {
    navigate('/login')
    localStorage.removeItem('token')
    try {
      await axios.post('http://localhost:8000/api/logout', {headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }});
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(isOn){
      dispatch(dark())
    }else{
      dispatch(light())
    }
  },[isOn])

  return (
    <div className={`${isDark ? " bg-black text-white duration-500" : "bg-neutral-100 text-black duration-500"}`}>
      {/* Navbar Mobile */}
      <div className='md:hidden max-w-7xl mx-auto fixed bottom-0 z-10 w-full'>
        {/* Menu */}
        <div className={menu ? "bg-indigo-500 text-white  p-4 max-w-max mx-auto rounded-xl translate-y-0 duration-500 ease-out" : " max-w-max px-14 py-8 mx-auto rounded-xl ease-in duration-500"}>
        {menu && (
          <div className="flex space-x-6">
            <div onClick={handleMenu} className='flex items-center space-x-1'>
              <span className='text-xl text-white'><MdPlaylistAdd/></span>
              <Link to='/addproperty'>Add Property</Link>
            </div>
          </div>
          )}
        </div>
      {/* Menu Bar */}
        <nav className={`flex justify-between items-center px-4 ${isDark ? " bg-black text-white" : "bg-neutral-100 text-black"}`}>
          {/* <Link onClick={() => setMenu(false)} to='/home' className='text-2xl text-indigo-700 font-bold'><SlHome/></Link> */}
          <Link onClick={() => setMenu(false)} to='/home' className='text-2xl text-indigo-700 font-bold'><SlHome/></Link>
          <Link onClick={() => setMenu(false)} to='/favoraiteproperties' className='text-2xl text-indigo-700 font-bold'><VscBookmark/></Link>
          <button onClick={handleMenu} className='text-3xl bg-gradient-to-b from-indigo-500  via-indigo-700  to-indigo-500 text-white rounded-full p-3 font-bold '><TiPlus/></button>
          <Link onClick={() => setMenu(false)} to='/users' className='text-2xl text-indigo-700 font-bold'><AiOutlineUser/></Link>
          <Link onClick={() => setMenu(false)} to='/setting' className='text-2xl  text-indigo-700 font-bold'><SlSettings/></Link>
        </nav>
      </div>


{/* Navbar Laptop & Tablet  */}
      {/* Overly */}
      <div className={menuBig ? "bg-black/75 fixed top-0 left-0 z-20 h-screen w-full font-serif duration-300" : ""}>
          {/* bg-Menu */}
          <div className={ menuBig ?`fixed top-0 left-0  w-[380px] ${isDark ? " bg-black text-white duration-500" : "bg-neutral-100 text-black duration-500"} h-screen duration-500 ease-in-out p-3` : "fixed -left-[100%] duration-500 ease-in-out " }>
            <div className='flex justify-between items-center p-3'>
              <h1 className='text-3xl font-bold flex items-center'>Real<span className='text-indigo-500'>Estate</span> <span>
               <img className='w-10 h-10' src={apartment} alt="apartment" />
                </span></h1>
              <button className='text-2xl font-bold' onClick={() => setMenuBig(prev => !prev)}>X</button>
            </div>
            {/* List Page */}
            <div className=" flex flex-col space-y-6 p-3 mt-10">
                <Link to='/home' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><FaHome/></span><h1>Home</h1></Link>
                <Link to='/profile' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><FaUserAlt/></span><h1>Profile</h1></Link>
                <Link to='/properties' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><SiHomeassistantcommunitystore/></span><h1>All Properties</h1></Link>
                <Link to='/addproperty' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><BsHouseAddFill/></span><h1>Add Property</h1></Link>
                <Link to='/favoraiteproperties' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><FaHeart/></span><h1>Favoraite</h1></Link>
                <Link to='/users' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><ImUsers/></span><h1>Owners Properties</h1></Link>
                {/* <Link to='/changepassword' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><MdOutlinePassword/></span><h1>Change Password</h1></Link> */}
                <Link to='/setting' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><AiFillSetting/></span><h1>Setting</h1></Link>
                {/* <Link to='/privicyandpoliciy' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><MdPrivacyTip/></span><h1>Privicy Policy</h1></Link> */}
                {/* <Link to='/contact' className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500' onClick={()=>setMenuBig(prev=>!prev)} > <span className='text-xl'><MdFeedback/></span><h1>Feedback</h1></Link> */}
                <button onClick={() => {
                  handleLogout()
                  setMenuBig(prev=>!prev)
                  }} className='text-2xl flex items-center space-x-2 hover:pl-4 duration-500 hover:border-l-[30px]   hover:border-indigo-500'  > <span className='text-xl'><RiLogoutBoxFill/></span><h1>Logout</h1></button>
            </div>
          </div>
      </div>
      <div className="hidden md:flex max-w-7xl mx-auto justify-between items-center p-4 ">
        <Link to='/home' className='text-3xl font-bold font-serif cursor-pointer flex items-center'> <img className='w-10 h-10 t-2' src={apartment} alt="apartment" /> <h1>Real<span className='text-indigo-500'>Estate</span></h1> </Link>
        <div className=" flex items-center">
          <ProfileHeader/>
          {/* <div className='hidden md:flex lg:ml-4 items-center bg-gray-500 text-white rounded-full text-xl'>
              <button onClick={()=> { dispatch(light())}} className= {isDark ?  'rounded-full p-2  cursor-pointer duration-500' : 'bg-black rounded-full p-2  cursor-pointer duration-500'}><BsSun/></button>
              <button onClick={()=> { dispatch(dark())}} className= {isDark ? ' text-black rounded-full p-2  cursor-pointer bg-white duration-500' : ' text-white rounded-full p-2  cursor-pointer duration-500'}><BsMoonStarsFill/></button>
          </div> */}
          <div className={`flex w-14 ${!isOn ? "bg-black/20" : "bg-zinc-700 "}   p-1 rounded-full cursor-pointer ${isOn ? 'justify-end' : ''}`} onClick={toggleSwitch}>
            <motion.div className={`w-7 h-7 ${!isOn ? "bg-gradient-to-b from-amber-600 to-blue-500 text-white" : "bg-gradient-to-b from-amber-600 to-blue-500 text-white"}  text-xl flex items-center justify-center  rounded-full`} layout transition={spring}>  {!isOn ? <BsMoonStarsFill/> : <HiSun/> } </motion.div> 
          </div>
          <button onClick={() => setMenuBig(prev => !prev)} className='text-4xl '><BiMenuAltRight/></button>
        </div>
      </div>
    </div>
  )
}

export default Navbar