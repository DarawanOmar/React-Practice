import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const PostPage = ({posts , setPosts}) => {
    const {id} = useParams()
    const navigate = useNavigate()
    const post = posts.find(post=> (post.id).toString() === id)


    const handleDelete = (id)=>{
        setPosts(posts.filter(post => post.id !== id))
        navigate('/')
    }
  return (
    <div className='text-white mt-6 mx-2 h-screen'>
        <h1 className='text-3xl mb-6'>{post?.title}</h1>
        <p>{post?.body}</p>
        <div className='space-x-4 mt-4'>
            <button onClick={() => handleDelete(post?.id)} className='bg-rose-500 text-white px-4 py-2 rounded-md  border-[3px] border-rose-500 hover:bg-transparent duration-500 '>Delete</button>
            <Link to={`/editpost/${post?.id}`}><button className='bg-green-500 text-white px-4 py-2 rounded-md  border-[3px] border-green-500 hover:bg-transparent duration-500 '>Edit</button></Link>
        </div>
    </div>
  )
}

export default PostPage