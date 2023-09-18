import React from 'react'
import user from '../img/user.png'
import passwordImg from '../img/password.png'
import emailImg from '../img/mail.png'
import phone from '../img/phone.png'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import ModelVerifyEmail from '../components/ModelVerifyEmail'
import { useState } from 'react'
import { useRef } from 'react'
import Lottie from 'lottie-react'
import loaderbuilding from '../components/animation_lm5yh8pd.json'
import {IoMdArrowRoundBack} from 'react-icons/io'
import { Link } from 'react-router-dom'


const Register = () => {
    const errorRef = useRef()
    const [showModel, setShowModel] = useState(false)
    const [loader, setLoader] = useState(false)
    const [error, setError] = useState([])
    const schema = yup.object().shape({
        name : yup.string().required("Write Your Name").min(3),
        email : yup.string().email("Please Enter Vaid Email").required("Write Your Email"),
        password : yup.string().required("Write your Pasword").min(6,"Atlest Write 6 Character").max(16,"Your Password So Long"),
        phone_number : yup.string().required("Write your Phone Number").matches(/^[0-9]+$/, "Must be only digits").min(11, "Must be exactly 11 digits").max(11, "Must be exactly 11 digits"),
    })

    const {formState:{errors} ,handleSubmit, register, reset} = useForm({
        resolver : yupResolver(schema)
    })

    const submitForm = async (data) => {
        
            setLoader(true)
            const response = await axios.post('http://localhost:8000/api/register',data,{headers: {'Accept': 'application/json','Content-Type': 'application/json'}})
            if(response.data.user){
                setShowModel(true)
                setLoader(false)
                reset()
            }else{
                setError(error.response.data.Errors);
            }
    }

    if(loader){
        return (
            <div className="text-center mt-28 max-w-xs mx-auto">
                <Lottie animationData={loaderbuilding} loop={true}/>
                <h1 className='text-3xl mt-3 font-bold italic'>Loading...</h1>
            </div>
        )
    }

  return (
    <div className="bg-neutral-100 flex justify-center items-center h-screen">
        <div className=" bg-neutral-200 rounded-t-3xl md:rounded-3xl w-full px-6 md:w-1/2 mx-auto">
            <div className="mt-4 ml-0">
                <Link to='/login' className='cursor-pointer md:text-2xl'><IoMdArrowRoundBack/></Link>
            </div>
            <h1 className='text-center font-bold text-3xl py-10'>Register</h1>
            {/* Error */}
            {error.length > 0 ? <h1 ref={errorRef} className='text-center bg-rose-500 rounded-xl p-2 my-2 text-white'>{error[0]}</h1> : null}
            <form onSubmit={handleSubmit(submitForm)}>
                {/* user */}
                <div className=' border-b-2 bg-white rounded-2xl p-2 '>
                {errors.name && <h1 className='text-rose-500 text-md text-center'>{errors.name?.message}</h1>}
                    <div className='flex items-center'>
                        <span><img className='w-9 h-9 ' src={user} alt="" /></span>
                        <input {...register("name")} type="text" className='p-2 md:p-4 focus:outline-none' placeholder='username' />
                    </div>
                </div>
                {/* email */}
                <div className=' border-b-2 bg-white rounded-2xl p-2 my-3'>
                {errors.email && <h1 className='text-rose-500 text-md text-center'>{errors.email?.message}</h1>}
                    <div className='flex items-center'>
                        <span><img className='w-9 h-9 ' src={emailImg} alt="" /></span>
                        <input {...register("email")} type="email" className='p-2 md:p-4 focus:outline-none' placeholder='Email' />
                    </div>
                </div>
                {/* phone_number */}
                <div className=' border-b-2 bg-white rounded-2xl p-2 my-3'>
                {errors.phone_number && <h1 className='text-rose-500 text-md text-center'>{errors.phone_number?.message}</h1>}
                    <div className='flex items-center'>
                        <span><img className='w-9 h-9 ' src={phone} alt="" /></span>
                        <input {...register("phone_number")} type="number" className='p-2 md:p-4 focus:outline-none' placeholder='Phone_Number' />
                    </div>
                </div>
                {/* pasword */}
                <div className=' bg-white rounded-2xl p-2 '>
                {errors.password && <h1 className='text-rose-500 text-md text-center'>{errors.password?.message}</h1>}
                    <div className='flex items-center'>
                        <span><img className='w-9 h-9 ' src={passwordImg} alt="" /></span>
                        <input {...register("password")} type="password" className='p-2 md:p-4 focus:outline-none' placeholder='password' />
                    </div>
                </div>
                {/* register Button */}
                <div className='text-center mt-10 pb-[132px]'>
                    <button type='submit' className='bg-indigo-600 text-white py-4 px-32 rounded-xl'>Register</button>
                </div>
            </form>
        {showModel && <ModelVerifyEmail setShowModel={setShowModel}/>}
        </div>
    </div>
  )
}

export default Register