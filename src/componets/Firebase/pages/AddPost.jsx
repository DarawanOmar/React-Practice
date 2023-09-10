import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {FaReact} from 'react-icons/fa'
import { auth, db } from '../config/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const AddPost = () => {
    const[user] = useAuthState(auth)
    const postRef = collection(db,"posts")
    const navigate = useNavigate()
    const schema = yup.object().shape({
        title:yup.string().required("Fill Out The Space")
    })
    const {register,handleSubmit,formState:{errors}, reset} = useForm({
        resolver : yupResolver(schema)
    })

    const handelOnSubmit = async (data) => {
        const newPost = {
            userId: user?.uid,
            username: user?.displayName,
            image: user?.photoURL,
            date: format(new Date(), "MM/dd/yyyy p"),
            title: data.title,
        }
        await addDoc(postRef,newPost)
        reset()
        toast.success("Data Send SuccessFully")
        navigate('/')
    }  

  return (
    <div className='max-w-4xl mx-auto font-serif p-4'>
        <div className="rounded-3xl shadow-xl bg-pink-500 text-white p-4 mt-10 flex flex-col">
            <div className="flex items-center justify-between">
                <h1 className='text-2xl italic'> Add Post</h1>
                <span className='text-2xl'><FaReact/></span>
            </div>
            <form onSubmit={handleSubmit(handelOnSubmit)} className='flex flex-col w-full my-6'>
                <div className="mt-3 ">
                    <label className='text-xl'>Title</label>
                    {errors.title &&  <h1 className='bg-red-500 text-white p-2 rounded-md text-center my-4'>{errors.title?.message}</h1>}
                    <input {...register("title")} type="text"  className='w-full focus:outline-none p-3 rounded-lg text-center text-black' placeholder='Title'/>
                </div>
                <div className=" flex justify-center mt-6">
                    <button className='text-center  w-1/2 my-4 py-3 bg-white text-black text-lg  rounded-lg hover:bg-transparent border-2 border-white duration-500 hover:text-white '> Send </button>
                </div>
            </form>
        </div>

        
    </div>
  )
}

export default AddPost