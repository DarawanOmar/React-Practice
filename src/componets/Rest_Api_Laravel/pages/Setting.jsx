import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { SlArrowRight } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import userimage from '../img/user.png'
import Password from '../img/password2.png'
import logout from '../img/logout.png'
import shild from '../img/shield.png'
import feedback from '../img/feedback.png'
import setting from '../img/settings (1).png'
import darkmode from '../img/darkmode.png'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'


const Setting = () => {
    const navigate = useNavigate();
    const{isDark} = useSelector((state) => state.dark)
    const [user, setUser] = useState([])

    useEffect(()=>{
    const fetchuser = async () => {
        const data = await axios.get('http://localhost:8000/api/profile', {headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
        setUser(data.data)
    }
    fetchuser()
    },[])

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

    return (
    <div className={isDark ? " bg-black text-white  duration-500" : "bg-neutral-100 text-black duration-500"}>
        <div className={`max-w-7xl mx-auto h-screen ${isDark ? " bg-black text-white " : "bg-neutral-100 text-black"}`}>
            {/* Top Back Button */}
             <div className="flex md:hidden  justify-between items-center p-2 px-4">
                <div className="flex space-x-3">
                    <Link to='/home' className='text-xl text-indigo-500 mt-1'><IoIosArrowBack/></Link>
                    <h1 className='text-xl font-realEstate2 font-bold mb-1 '><Link to='/home'>Setting</Link></h1>
                </div>
            </div>
            {/* Profile */}
            <div className='p-3 md:mt-'>
                <div className={`flex justify-between items-center   ${isDark ? " bg-zinc-800 text-white " : "bg-indigo-50 text-black"} rounded-2xl p-2 md:p-4 md:shadow-xl`}>
                    <div className="flex items-center">
                        {user.image ?
                            <span><img className='w-11 h-11 md:w-14 md:h-14 rounded-full object-cover' src={user.photo} alt="user" /></span>
                        :
                            <span><img className='w-11 h-11 md:w-14 md:h-14 ' src={userimage} alt="images" /></span>
                        }
                        <h1 className='ml-3 font-bold md:text-xl'><Link to='/profile'>Personal Profile</Link></h1>
                    </div>
                     <span className='text-lg pr-6'><Link to='/profile' ><SlArrowRight/></Link></span>
                </div>
            </div>
            {/* Setting */}
            <div className='p-3'>
                <div className={`flex justify-between items-center   ${isDark ? " bg-zinc-800 text-white " : "bg-indigo-50 text-black"} rounded-2xl p-2 md:p-4 md:shadow-xl`}>
                    <div className="flex items-center">
                        <span><img className='w-8 h-8 md:w-14 md:h-14' src={setting} alt="" /></span>
                        <h1 className='ml-4 font-bold md:text-xl'><Link to='/changename'>Setting</Link></h1>
                    </div>
                     <span className='text-lg pr-6'><Link to='/changename'><SlArrowRight/></Link></span>
                </div>
            </div>
            {/* Change Password */}
            <div className='p-3'>
                <div className={`flex justify-between items-center   ${isDark ? " bg-zinc-800 text-white " : "bg-indigo-50 text-black"} rounded-2xl p-2 md:p-4 md:shadow-xl`}>
                    <div className="flex items-center">
                        <span><img className='w-8 h-8 md:w-14 md:h-14' src={Password} alt="" /></span>
                        <h1 className='ml-4 font-bold md:text-xl'><Link to='/changepassword'>Change Password</Link></h1>
                    </div>
                     <span className='text-lg pr-6'><Link><SlArrowRight/></Link></span>
                </div>
            </div>
            {/* Privcy Policy */}
            <div className='p-3'>
                <div className={`flex justify-between items-center   ${isDark ? " bg-zinc-800 text-white " : "bg-indigo-50 text-black"} rounded-2xl p-2 md:p-4 md:shadow-xl`}>
                    <div className="flex items-center">
                        <span><img className='w-11 h-11 md:w-14 md:h-14' src={shild} alt="" /></span>
                        <h1 className='ml-3 font-bold md:text-xl'><Link to='/privicyandpoliciy'>Privcy Policy</Link></h1>
                    </div>
                     <span className='text-lg pr-6'><Link to='/privicyandpoliciy'><SlArrowRight/></Link></span>
                </div>
            </div>
            {/* FeedBack */}
            <div className='p-3'>
                <div className={`flex justify-between items-center   ${isDark ? " bg-zinc-800 text-white " : "bg-indigo-50 text-black"} rounded-2xl p-2 md:p-4 md:shadow-xl`}>
                    <div className="flex items-center">
                        <span><img className='w-11 h-11 md:w-14 md:h-14' src={feedback} alt="" /></span>
                        <h1 className='ml-3 font-bold md:text-xl'><Link to='/contact'>FeedBack</Link></h1>
                    </div>
                     <span className='text-lg pr-6'><Link to='/contact' ><SlArrowRight/></Link></span>
                </div>
            </div>
        
            {/* DarkMode */}
            <div className='p-3 md:hidden'>
                <div className={`flex justify-between items-center   ${isDark ? " bg-zinc-800 text-white " : "bg-indigo-50 text-black"} rounded-2xl p-2 md:p-4 md:shadow-xl`}>
                    <div className="flex items-center">
                        <span><img className='w-8 h-8 md:w-14 md:h-14' src={darkmode} alt="" /></span>
                        <button  className='ml-5 text-md font-bold md:text-xl'><Link to='/darkmode'>DarkMode</Link></button>
                    </div>
                    <span className='text-lg pr-6'><Link to='/darkmode' ><SlArrowRight/></Link></span>
                </div>
            </div>
            {/* Logout */}
            <div className='p-3'>
                <div className={`flex justify-between items-center   ${isDark ? " bg-zinc-800 text-white " : "bg-indigo-50 text-black"} rounded-2xl p-2 md:p-4 md:shadow-xl`}>
                    <div className="flex items-center">
                        <span><img className='w-8 h-8 md:w-14 md:h-14' src={logout} alt="" /></span>
                        <button onClick={handleLogout} className='ml-5 text-md font-bold md:text-xl'>Log Out</button>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Setting