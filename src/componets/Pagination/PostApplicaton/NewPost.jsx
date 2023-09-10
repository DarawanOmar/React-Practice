import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import format from 'date-fns/format';
import { useContext } from 'react'
import { DataContext } from './Context/DataContext'


const NewPost = () => {


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const nagigate = useNavigate()
  const {posts , setPosts} = useContext(DataContext)


  const submit =(e)=>{
    e.preventDefault();
    onSubmit();
    nagigate('/');
  }
  const onSubmit = () => {
    const newPostAdd = {id: nanoid(),title: title,body: body,date: format(new Date(), "MM dd yyyy pp")};
    setPosts([newPostAdd, ...posts]);
    setBody('');
    setTitle('');
  };

  return (
    <form  className='font-serif' >
      <h1 className='text-center text-2xl font-bld py-4'> Add New Post Here </h1>
      <div className="mt-2 text-center">
        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder='Post Title ' 
        className='border-2 text-center text-xl border-black p-3 w-[22rem] md:w-full rounded-md  shadow-2xl ' />
      </div>
      <div className="mt-2 text-center">
        <textarea type="text" value={body} onChange={(e)=> setBody(e.target.value)} placeholder='Post content ' 
        className='border-2 text-center text-xl border-black p-3 w-[22rem] md:w-full h-[10rem] rounded-md  shadow-2xl ' />
      </div>

        <div className='text-center'>
          <button onClick={submit} className='bg-sky-500 text-white  text-2xl p-3 w-[22rem] md:w-full m-2 rounded-md mt-6'> Add Post</button>
        </div>

    </form>
  )
}

export default NewPost