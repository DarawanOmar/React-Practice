import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from 'react-icons/io'
import Lottie from 'lottie-react'
import send from '../components/sendContact.json'
import { useEffect } from 'react'

const Contact = () => {

  const [loader, setLoader] = useState(false)
  const [user, setUser] = useState([])
    const [error, setError] = useState([])
    const schema = yup.object().shape({
        message : yup.string().required("Write your Pasword").min(10,"Atlest Write 6 Character").max(200,"Your Password So Long"),
    })

    const {formState:{errors} ,handleSubmit, register, reset} = useForm({
        resolver : yupResolver(schema)
    })

    useEffect(()=>{
      const fetchUser = async () => {
        const user = await axios.get('http://localhost:8000/api/profile', {headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }});
        setUser(user.data)
      }
      fetchUser()
    },[])
    const submitForm = async (data) => {
        try {
            setLoader(true)
            const response = await axios.post('http://localhost:8000/api/contact', {...data,full_name:user.name,email:user.email}, {headers: {"Accept":"application/json"}});
            if(response){
              setLoader(false)
              reset()
            }else{
              setLoader(false)
              setError(response.data.Errors)
            }
        } catch (error) {
            setError(error.response.data.Errors);
        }
    }

    if(loader){
      return (
        <div className="text-center mt-28 max-w-xs mx-auto">
          <Lottie animationData={send} loop={true}/>
          <h1 className='text-3xl mt-3 font-bold italic'>Loading...</h1>
        </div>
      )
    }
  return (
    <div className="bg-blue-600 flex justify-center items-center h-screen">
        <div className=" bg-neutral-200 rounded-t-3xl w-full px-6">
            <div className="mt-4 ml-0">
                <Link to='/home' className='cursor-pointer '><IoMdArrowRoundBack/></Link>
            </div>
            <h1 className='text-center font-bold text-3xl pt-10'>FeedBack</h1>
            <p className='text-center text-gray-400 my-2'>We would be very happy to hear your opinion on us  </p>
            {/* Error */}
            {error.length > 0 ? <h1 className='text-center bg-rose-500 rounded-xl p-2 my-2 text-white'>{error[0]}</h1> : null}
            <form onSubmit={handleSubmit(submitForm)}>
                
                {/* message */}
                {errors.message && <h1 className='text-rose-500 text-md text-center'>{errors.message?.message}</h1>}
                <div className='flex items-center bg-white rounded-2xl p-2 '>
                    <textarea {...register("message")} cols={38} rows={8} className='p-2 focus:outline-none placeholder:text-center' placeholder='Messgae' />
                </div>
                {/* register Button */}
                <div className='text-center mt-10 pb-[132px]'>
                    <button type='submit' className='bg-gradient-to-b from-indigo-500  via-indigo-700  to-indigo-500 text-white py-4 px-32 rounded-xl'>Send</button>
                </div>
            </form>
        {/* {showModel && <ModelVerifyEmail setShowModel={setShowModel}/>} */}
        </div>
    </div>
  )
}

export default Contact