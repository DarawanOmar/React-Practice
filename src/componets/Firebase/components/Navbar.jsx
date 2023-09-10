import React from 'react'
import logoUser from '../img/NicePng_gray-circle-png_1366211.png' 
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from '../config/firebase'
import {signOut} from 'firebase/auth'

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false)
    const navigate = useNavigate()
    const handleShowLogout = () => {
         setShowLogout(prev => !prev)
    }
    const[user] = useAuthState(auth)
    const singOut = async () => {
          await signOut(auth)
    }
  return (
    <div className='max-w-4xl mx-auto mt-3'>
         <div className='flex justify-between items-center  p-4  bg-pink-500 text-white font-serif rounded-3xl'>
             <h1 className='md:text-3xl'>Dara'Firebase</h1>
             <div className="flex items-center space-x-4">
                 <Link to='/' className='px-3 py-1 rounded-full hover:bg-white hover:text-black duration-700 flex justify-center items-center'>Home</Link>
                 {user ? (
                    <Link to='/addpost' className='px-3 py-1 rounded-full hover:bg-white hover:text-black duration-700 flex justify-center items-center w-17'>Add Post</Link>
                 ): null}
             </div>
             <div className="">
             <div  className='flex justify-center items-center'>
                         {!user ? (
                              <Link to='/login'><img src={logoUser} alt="user" className='w-12 h-12 rounded-full flex justify-center items-center ' /></Link>
                          ):(
                              <button onClick={handleShowLogout}>
                                   <img src={user?.photoURL} alt="user" className='w-8 h-8 md:w-12 md:h-12 rounded-full flex justify-center items-center ' />
                              </button>
                         )}
               </div>
             </div>
         </div>
         <div className={showLogout ? 'max-w-6xl mx-auto flex justify-end  duration-700 ease-in-out' : ' flex justify-end max-w-6xl mx-auto  -translate-y-52 duration-700 ease-in-out'}>
               <button 
                    className='flex items-center bg-pink-500 text-white px-4 py-1 rounded-full mt-2' 
                    onClick={() => {
                         singOut()
                         handleShowLogout()
                         navigate("/")
                    }}
               >LogOut </button>
          </div>

    </div>
  )
}

export default Navbar