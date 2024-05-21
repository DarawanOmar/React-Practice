import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {light,dark} from '../features/Dark-Mode/DarkModeSlice'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from "framer-motion";

const DarkModePage = () => {

  const{isDark} = useSelector((state) => state.dark);
  const dispatch = useDispatch();
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);
  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };
  useEffect(()=>{
    if(isOn){
      dispatch(dark())
    }else{
      dispatch(light())
    }
  },[isOn])
  return (
    <div className={`md:hidden min-h-screen ${isDark ? "bg-black text-white" : "bg-neutral-100 text-black"} font-serif`}>
      <div className="flex items-center p-1">
        <Link  to='/setting' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
        <h1 className='text-xl font-bold  '><Link to='/setting'>Setting</Link></h1>
      </div>
      <div className='flex justify-between items-center  space-x-5 max-w-7xl mx-auto pt-10 p-2'>
          <h1 className=''>Change The Theme Of Application To Dark Or Light</h1>
          <div className={`flex w-20 ${!isOn ? "bg-black/20" : "bg-green-400"}  p-1 rounded-full cursor-pointer ${isOn ? 'justify-end' : ''}`} onClick={toggleSwitch}>
            <motion.div className="w-7 h-7 bg-white text-black text-xl flex items-center justify-center  rounded-full" layout transition={spring}>   </motion.div> 
          </div>

      </div>
    </div>
  )
}

export default DarkModePage