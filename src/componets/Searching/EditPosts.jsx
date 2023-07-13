import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditPosts = ({posts , setPosts}) => {

    const {id} = useParams()
    const post = posts.find(post => post.id.toString() === id )
    const [editTitle, setEditTitle] = useState(post.title);
    const [editBody, setEditBody] = useState(post.body);
    const navigate = useNavigate()

  const handleSavePost = (id)=>{
    setPosts( posts.map(post => post.id === id ? {...post , title : editTitle , body : editBody } : post ))
    navigate(`/postpage/${post.id}`)
  }

  const submitForm = (e)=>{
    e.preventDefault()
    handleSavePost()
  }

  return (
    <div className='h-screen '>    
      <h1 className='text-center text-4xl font-bold text-white mt-6'> Edit Post</h1>
      <form onSubmit={submitForm} className='flex flex-col space-y-6'>
        <input value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} type="text" className='bg-white p-3 mt-6 placeholder:text-center placeholder:text-xl rounded-md ' placeholder='Title'/>
        <textarea value={editBody} onChange={(e)=>setEditBody(e.target.value)} placeholder='Content ' className='placeholder:text-center placeholder:text-xl h-40 rounded-md p-2'>
        </textarea>
        <button onClick={() => handleSavePost(post.id)}  className='bg-green-500 text-white text-2xl p-3 rounded-md border-[3px] border-green-500 hover:bg-transparent duration-500 '> Save Post</button>
      </form>
    </div>
  )
}

export default EditPosts