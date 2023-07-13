import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'


const AddPosts = ({setPosts , posts}) => {
  const [title,setTitle] = useState()
  const [body,setBody] = useState()
  const navigate = useNavigate()


  const handleSavePost = ()=>{
    const newPost = {id:nanoid(),title : title , body : body}
    setPosts([newPost,...posts])
    navigate('/')
  }

  return (
    <div className='h-screen p-1'>    
      <h1 className='text-center text-4xl font-bold text-white mt-6'> Add Post</h1>
      <form onSubmit={(e)=> e.preventDefault()} className='flex flex-col space-y-6'>
        <input onChange={(e)=>setTitle(e.target.value)} type="text" className='bg-white text-center  p-3 mt-6 placeholder:text-center placeholder:text-xl rounded-md ' placeholder='Title'/>
        <textarea onChange={(e)=>setBody(e.target.value)} placeholder='Content ' className=' text-center placeholder:text-center placeholder:text-xl h-40 rounded-md p-2'>
        </textarea>
        <button onClick={handleSavePost}  className='bg-green-500 text-white text-2xl p-3 rounded-md border-[3px] border-green-500 hover:bg-transparent duration-500 '> Add Post</button>
      </form>
    </div>

  )
}

export default AddPosts