import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import ModelChangePassword from '../components/ModelChangePassword'

const ChangePassword = () => {
  const [emailErrors, setEmailErrors] = useState('')
  const [passErrors, setPassErrors] = useState('')
  const [showModel, setShowModel] = useState(false)

  const schema = yup.object().shape({
    email : yup.string().email("Please Enter Vaid Email").required("Write Your Email"),
    password : yup.string().required("Write your Pasword").min(6,"Atlest Write 6 Character").max(16,"Your Password So Long"),
    newpassword : yup.string().required("Write your Pasword").min(6,"Atlest Write 6 Character").max(16,"Your Password So Long"),
    confirmPassword : yup.string().oneOf([yup.ref("newpassword"),null],"Passworn Not Match"),
})

const {formState:{errors} ,handleSubmit, register, reset} = useForm({
    resolver : yupResolver(schema)
})

  const habdleSubmitForm = async (data) => {
      const response = await axios.post('http://localhost:8000/api/changepassword',data,{headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
      if(!response.data.ErrorEmail){
        if(!response.data.ErrorPassword){
          setShowModel(true)
          reset()
        }else{
          setPassErrors(response.data.ErrorPassword);
        }
      }else{
        setEmailErrors(response.data.ErrorEmail);
      }
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="flex items-center p-3">
          <Link  to='/setting' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
          <h1 className='text-xl font-bold  '><Link to='/setting'>Setting</Link></h1>
      </div>
      <form onSubmit={handleSubmit(habdleSubmitForm)} className="p-4">
        <h1 className='pt-4 pb-1 text-gray-500'>Please Write Your Email For Ensure Yourself</h1>
        {emailErrors && <h1 className='text-rose-500 text-center text-md'>{emailErrors}</h1>}
        {errors && <h1 className='text-rose-500 text-center text-md'>{errors.email?.message}</h1>}
        <input {...register("email")} onFocus={() => setEmailErrors('')} type="email" className='p-2 text-center rounded-md focus:outline-none w-full bg-gray-200 placeholder:text-center placeholder:text-gray-400' placeholder='Example@gmail.com' />
        <h1 className='pt-4 pb-1 text-gray-500'>Current Password</h1>
        {passErrors && <h1 className='text-rose-500 text-center text-md'>{passErrors}</h1>}
        {errors && <h1 className='text-rose-500 text-center text-md'>{errors.password?.message}</h1>}
        <input {...register("password")} onFocus={()=> setPassErrors('') } type="password" className='p-2 text-center rounded-md focus:outline-none w-full bg-gray-200 placeholder:text-center placeholder:text-gray-400' placeholder='Current Password' />
        <h1 className='pt-4 pb-1 text-gray-500'>New Password</h1>
        {errors && <h1 className='text-rose-500 text-center text-md'>{errors.newpassword?.message}</h1>}
        <input {...register("newpassword")} type="password" className='p-2 text-center rounded-md focus:outline-none w-full bg-gray-200 placeholder:text-center placeholder:text-gray-400' placeholder='New Password' />
        <h1 className='pt-4 pb-1 text-gray-500'>Confirm Password</h1>
        {errors && <h1 className='text-rose-500 text-center text-md'>{errors.confirmPassword?.message}</h1>}
        <input {...register("confirmPassword")} type="password" className='p-2 text-center rounded-md focus:outline-none w-full bg-gray-200 placeholder:text-center placeholder:text-gray-400' placeholder='Confirm Password' />
        <button type='submit' className='w-full bg-gradient-to-r from-indigo-300 via-indigo-600 to-indigo-300 text-white py-2 rounded-md px-6 mt-4 '>Save</button>
      </form>
      {showModel && <ModelChangePassword setShowModel={setShowModel}/>}
    </div>
  )
}

export default ChangePassword