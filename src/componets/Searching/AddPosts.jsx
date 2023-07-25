import React, { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
import apiRequest from './api/apiRequest'
import api from './api/posts'

const AddPosts = ({setPosts , posts , setError}) => {

  const url = 'http://localhost:3500/Posts1';
  const [title,setTitle] = useState()
  const [body,setBody] = useState()
  const navigate = useNavigate()


  const handleSavePost = async () => {
    // const newPost = {id:nanoid(),title : title , body : body};
    // const Posts = [newPost,...posts];
    // setPosts(Posts);
    // navigate('/');
    // post --> zyad krdn
    // get --> henanawa 
    // patch --> update 
    // delete --> raskrdnawa 
    // const optionPost = {
      //   method:'POST',
      //   headers : {
        //     "Content-Type" : "application/json"
        //   },
        //   body: JSON.stringify(newPost)
        // }
        // const result = await apiRequest(url,optionPost)
        // if(result) setError(result)
        
      const newPost = {id:nanoid(),title : title , body : body};
      const resul = await api.post(`/Posts1`,newPost)
      const Posts = [resul.data,...posts];
      setPosts(Posts);
      navigate('/');


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