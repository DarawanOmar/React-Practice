import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const singUpWithGoogle = async () => {
        await signInWithPopup(auth,provider)
        navigate('/')
    }

  return (
    <div className= " flex items-center justify-center h-[500px]  md:h-[650px] font-serif text-black">

        <div className="shadow-xl rounded-md p-8 md:p-14 bg-neutral-200">
            <div className="flex items-center justify-between">
                <h1 className='font-bold text-xl flex items-center text-pink-500'>Dara <span className= 'text-black mx-1 duration-500 '>Firebase</span> </h1>
            <h1 className= "my-2">Sign Up</h1>
            </div>
            <form className="flex flex-col my-4 ">
                <div className='flex flex-col'>
                    <label className="text-sm text-black hover:text-pink-500">Email address</label>
                    <input className="border-b-pink-500 border-b-[3px] rounded-tl-sm rounded-tr-sm focus:outline-none  pl-2" type="email" name="email"/>
                </div>
                <div className='flex flex-col relative'>
                    <label className="text-sm text-black hover:text-pink-500 mt-2">Password</label>
                    <input className="border-b-pink-500 border-b-[3px] rounded-tl-sm rounded-tr-sm focus:outline-none  pl-2" type="password" name="password"/>
                </div>
                <h1 className="bg-pink-500 text-white rounded-md mt-4 py-2 text-center hover:bg-opacity-80 cursor-pointer duration-500" >Login</h1>
            </form>
            <div className="">
                <div className="flex justify-center items-center bg-white p-2 space-x-2 rounded-md">
                    <button onClick={singUpWithGoogle} className='text-sm'>Sing Up With Google Account</button>
                    <span className='text-xl'><FcGoogle/></span>
                </div>
            </div>               
        </div>
        
    </div>
  )
}

export default Login