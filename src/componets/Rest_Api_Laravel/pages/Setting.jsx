import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { SlArrowRight } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'
import userimage from '../img/user.png'
import Password from '../img/password(1).png'
import logout from '../img/logout.png'
import shild from '../img/shield.png'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'


const Setting = () => {
    const navigate = useNavigate();

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
    <div>
        {/* Top Back Button */}
         <div className="flex justify-between items-center p-2 px-4">
            <div className="flex space-x-3">
                <Link to='/home' className='text-xl text-indigo-500 mt-1'><IoIosArrowBack/></Link>
                <h1 className='text-xl font-realEstate2 font-bold mb-1 '><Link to='/home'>Setting</Link></h1>
            </div>
        </div>

        {/* Profile */}
        <div className='p-3'>
            <div className="flex justify-between items-center   bg-indigo-50 rounded-2xl p-2">
                <div className="flex items-center">
                    {user.photo ?
                        <span><img className='w-11 h-11 rounded-full object-cover' src={user.photo} alt="user" /></span>
                    :
                        <span><img className='w-11 h-11 ' src={userimage} alt="images" /></span>
                    }
                    <h1 className='ml-3 font-bold'><Link to='/profile'>Personal Profile</Link></h1>
                </div>
                 <span className='text-lg pr-6'><Link to='/profile' ><SlArrowRight/></Link></span>
            </div>
        </div>

        {/* Change Password */}
        <div className='p-3'>
            <div className="flex justify-between items-center   bg-indigo-50 rounded-2xl p-2">
                <div className="flex items-center">
                    <span><img className='w-9 h-9 ' src={Password} alt="" /></span>
                    <h1 className='ml-3 font-bold'><Link to='/changepassword'>Change Password</Link></h1>
                </div>
                 <span className='text-lg pr-6'><Link><SlArrowRight/></Link></span>
            </div>
        </div>


        {/* Privcy Policy */}
        <div className='p-3'>
            <div className="flex justify-between items-center   bg-indigo-50 rounded-2xl p-2">
                <div className="flex items-center">
                    <span><img className='w-11 h-11 ' src={shild} alt="" /></span>
                    <h1 className='ml-3 font-bold'><Link to='/privicyandpoliciy'>Privcy Policy</Link></h1>
                </div>
                 <span className='text-lg pr-6'><Link><SlArrowRight/></Link></span>
            </div>
        </div>
       

        {/* Logout */}
        <div className='p-3'>
            <div className="flex justify-between items-center   bg-indigo-50 rounded-2xl p-3">
                <div className="flex items-center">
                    <span><img className='w-8 h-8 ' src={logout} alt="" /></span>
                    <button onClick={handleLogout} className='ml-5 text-md font-bold'>Log Out</button>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Setting