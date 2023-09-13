import React from 'react'
import { useState } from 'react'
import apartment from '../img/Apartment-128x128.png'
import user from '../img/user.png'
import password from '../img/password.png'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import {BiShow,BiHide} from 'react-icons/bi'
import Lottie from 'lottie-react'
import loginloader from '../components/login.json'

const Login = () => {
    const navigate = useNavigate();
    const [error, setError] = useState([])
    const [showPassword, setShowPassword] = useState(false)
    const [loaderLogin, setLoaderLogin] = useState(false)
    const schema = yup.object().shape({
        email : yup.string().email("Invalid Type Email").required("Write Your Name").min(3),
        password : yup.string().required("Write your Pasword").min(6,"Atlest Write 6 Character").max(16,"Your Password So Long"),
    })

    const {formState:{errors} ,handleSubmit, register} = useForm({
        resolver : yupResolver(schema)
    })

    const submitForm = async (data) => {
        setLoaderLogin(true);
        try {
            const response = await axios.post('http://localhost:8000/api/login', data, {headers: {"Accept":"application/json"}});
            if(response){
                localStorage.setItem('token',response.data.token)
                navigate('/home')
                setLoaderLogin(false);
            }else{
                setError(response.data.Error)
                setLoaderLogin(false);
            }
        } catch (error) {
            setError(error.response.data.Error)
            setLoaderLogin(false);
        }
    };

    if(loaderLogin){
        return(
            <div className="mt-20">
               <Lottie animationData={loginloader} loop={true}/>
            </div>
        )
    }

    return (
    <div className="bg-blue-600 font-serif">
        {/* Text Top */}
        <div className='pt-32 py-10 flex items-center justify-center'>
            <img className='w-10 h-10' src={apartment} alt="" />
            <h1 className='text-center font-bold text-3xl text-white '>Real Estate</h1>
        </div>
        <div className="bg-neutral-200 rounded-t-[60px] pb-[100px] p-10 ">

            <div className="pb-10">
                <h1 className='text-center font-bold text-2xl '>Login</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(submitForm)}>
                {/* Error */}
                {error.length > 0 ? <h1 className='bg-rose-500 text-white p-1 rounded-xl text-center'>{error}</h1> : null }               
                <div className="bg-white rounded-3xl flex flex-col mb-6 p-4">
                    {/* username */}
                    {errors.email && <h1 className='text-rose-500 text-center text-sm'>{errors.email?.message}</h1>}
                    <div className='flex items-center border-b-2 '>
                        <span><img className='w-9 h-9 ' src={user} alt="" /></span>
                        <input {...register("email")} type="email" className='p-2 focus:outline-none' placeholder='username' />
                    </div>
                    {/* password */}
                    {errors.password && <h1 className='text-rose-500 text-center text-sm'>{errors.password?.message}</h1>}
                    <div className='flex items-center relative'>
                        <span><img className='w-9 h-9 ' src={password} alt="" /></span>
                        <input  {...register("password")} type={showPassword ? "text" : "password"} className='p-2 focus:outline-none' placeholder='password' />
                        {!showPassword ? <span onClick={()=>setShowPassword(!showPassword)}><BiHide/></span> : <span onClick={()=>setShowPassword(!showPassword)}><BiShow/></span>}
                        {/* <span><BiShow/></span> */}
                    </div>
                </div>
                <div className="flex justify-between items-center pb-3">
                    <Link 
                    to='/forgotpassword'
                     className='text-gray-500'>Forget Password</Link>
                    <button type='submit' className='bg-blue-600 text-white px-10 py-3 rounded-xl'>Login</button>
                </div>
            </form>

            <div className="pb-5">
                Create Account <Link to='/register' className='text-blue-500'> Register</Link>
            </div>

        </div>
    </div>
  )
}

export default Login