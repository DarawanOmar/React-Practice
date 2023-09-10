import React from 'react'
import imageUpload from '../img/addPhoto.png'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useState } from 'react'
import Lottie from 'lottie-react'
import loaderbuilding from '../components/build.json'

const ModelAddImageProperty = ({setShowModel, idProperty}) => {
  const [sendLoader, setSendLoader] = useState(false)

  const schema = yup.object().shape({
    image: yup.mixed()
        .required("Photo is required")
        // .test("fileFormat", "Unsupported Format", value => {
        //     if (!value) return false;

        //     const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
        //     return SUPPORTED_FORMATS.includes(value[0].type);
        // })
  })

  const {formState:{errors} ,handleSubmit, register} = useForm({
    resolver : yupResolver(schema)
  })

  const handleOnSubmit = async (data) =>{

      // setSendLoader(true)
      // const response = 
      
      await axios.post(`http://localhost:8000/api/profile/properties/upload/image/${idProperty}`, data , {headers: {
        'Authorization': `Bearer${localStorage.getItem('token')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }})
      // if(response){
      //   setSendLoader(false)
      // }else{
      //   console.log(response.errors);
      //   setSendLoader(false)
      // }


    console.log({...data});
    // console.log(data.photo[0].name);
  }
  if(sendLoader){
    return (
        <div className="text-center mt-28 max-w-xs mx-auto">
        <Lottie animationData={loaderbuilding} loop={true}/>
        <h1 className='text-3xl mt-3 font-bold italic'>Loading...</h1>
    </div>
    )
}
    

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center font-serif">
      <div className="flex flex-col px-3">
        <div className= 'px-2 rounded-md bg-white '>

          <div className="flex justify-between items-center p-1">
            <h1 className='font-bold text-xl'>Add Image</h1>
            <button onClick={() => setShowModel(false)} className='bg-red-500 rounded-full w-5 h-5 flex justify-center items-center'><span className='text-white'>X</span></button>
          </div>

            <form onSubmit={handleSubmit(handleOnSubmit)}>
              <div className=' bg-white rounded-2xl p-2 mt-2 px-32'>
                <label htmlFor="file-upload">
                  <img className='max-h-[60px]' src={imageUpload} alt="imageUpload" />
                </label>
                {errors && <h1 className='text-center text-rose-500 '>{errors.image?.message}</h1>}
                  <input {...register("image")} type="file" id='file-upload'
                  className='hidden  w-full text-slate-500 file:border-0 file:p-2 file:bg-indigo-50 file:rounded-2xl file:text-indigo-700 file:font-semibold  hover:file:bg-indigo-100' />
              </div>
              <div className='text-center pb-4'>
                <button type='submit' className='bg-indigo-500 text-white text-center rounded-lg py-2 px-7 w-full'>Save</button>
              </div>
            </form>

        </div>
      </div>
    </div>
  )
}

export default ModelAddImageProperty