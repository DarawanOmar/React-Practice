import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import apiRequest from './api/apiRequest'
import api from'./api/posts'


const EditPosts = ({posts , setPosts }) => {

    const url = 'http://localhost:3500/Posts1';
    const {id} = useParams()
    const post = posts.find(post => post.id.toString() === id )
    const [editTitle, setEditTitle] = useState(post.title);
    const [editBody, setEditBody] = useState(post.body);
    const [error , setError] = useState("")
    const navigate = useNavigate()

  const handleSavePost = async (id)=>{
    // const  update = posts.map(post => post.id === id ? {...post , title : editTitle , body : editBody } : post )
    // setPosts( update )
    // navigate(`/postpage/${post.id}`)
    // // const myPost = posts.filter((post)=> post.id === id)
    // // console.log(myPost[0].title);
    // const optionEdit = {
    //   method : "PATCH",
    //   headers : {
    //     'Content-Type' : 'application/json',
    //   },
    //   body : JSON.stringify({title : editTitle , body : editBody})
    // }
    // const reqURL = `${url}/${id}`
    // const result = await apiRequest(reqURL,optionEdit)
    // if(result) setError(result)

    const update = {id,title : editTitle , body : editBody}
    const res = await api.put(`/Posts1/${id}`, update)
    setPosts(posts.map(post => post.id === id ? {...res.data } : post ))
    navigate(`/postpage/${post.id}`)



  }

  const submitForm = (e)=>{
    e.preventDefault()
    handleSavePost()
  }

  return (
    <div className='h-screen '>  
    {editTitle && <>  
      <h1 className='text-center text-4xl font-bold text-white mt-6'> Edit Post</h1>
      {error && <p className='text-center text-red-500 text-2xl font-bold '> {error}</p>}
      <form onSubmit={submitForm} className='flex flex-col space-y-6'>
        <input value={editTitle} onChange={(e)=>setEditTitle(e.target.value)} type="text" className='bg-white p-3 mt-6 placeholder:text-center placeholder:text-xl rounded-md ' placeholder='Title'/>
        <textarea value={editBody} onChange={(e)=>setEditBody(e.target.value)} placeholder='Content ' className='placeholder:text-center placeholder:text-xl h-40 rounded-md p-2'>
        </textarea>
        <button onClick={() => handleSavePost(post.id)}  className='bg-green-500 text-white text-2xl p-3 rounded-md border-[3px] border-green-500 hover:bg-transparent duration-500 '> Save Post</button>
      </form>
      </>}
      {!editTitle && 
      <>
        <h1> Post Not Found </h1>
        <h1> Go To Home <Link to='/'> Home</Link></h1>
      </>}
    </div>
  )
}

export default EditPosts