import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Link } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import Lottie from 'lottie-react'
import send from '../components/sendContact.json'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Contact = () => {

  const [loader, setLoader] = useState(false)
  const [user, setUser] = useState([])
    const [error, setError] = useState([])
  const{isDark} = useSelector((state) => state.dark)

    const schema = yup.object().shape({
        message : yup.string().required("Write your Message").min(10,"Atlest Write 6 Character").max(200,"Your Password So Long"),
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
    <div className={isDark ? " bg-black text-white  duration-500" : "bg-neutral-100 text-black duration-500"}>
      <div className={`flex max-w-7xl mx-auto justify-center items-center h-screen `}>
          <div className={` ${isDark ? " bg-black text-white  duration-500" : "bg-neutral-100 text-black duration-500"} rounded-t-3xl w-full px-6"`}>
            <div className="flex items-center mt-4 px-0 md:hidden">
              <Link  to='/setting' className='text-xl text-indigo-500'><IoIosArrowBack/></Link>
              <h1 className='text-xl font-bold  '><Link to='/setting'>Setting</Link></h1>
            </div>
            <h1 className='text-center font-bold text-3xl pt-10'>FeedBack</h1>
            <p className='text-center text-gray-400 my-2 md:text-xl'>We would be very happy to hear your opinion on us  </p>
            {/* Error */}
            {error.length > 0 ? <h1 className='text-center bg-rose-500 rounded-xl p-2 my-2 text-white'>{error[0]}</h1> : null}
            <form onSubmit={handleSubmit(submitForm)}>
      
                {/* message */}
                {errors.message && <h1 className='text-rose-500 text-md text-center'>{errors.message?.message}</h1>}
                <div className='flex items-center bg-white rounded-2xl p-2 '>
                    <textarea {...register("message")} cols={38} rows={8} className='p-2 w-full text-center focus:outline-none placeholder:text-center' placeholder='Messgae' />
                </div>
                {/* register Button */}
                <div className='text-center mt-10 pb-[132px]'>
                    <button type='submit' className='text-lg bg-blue-700 text-white py-4 px-32 rounded-xl'>Send</button>
                </div>
            </form>
          {/* {showModel && <ModelVerifyEmail setShowModel={setShowModel}/>} */}
          </div>
      </div>
    </div>
  )
}

export default Contact