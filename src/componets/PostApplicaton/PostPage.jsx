import React from 'react'
import { Link, useParams,useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { DataContext } from './Context/DataContext'


const PostPage = () => {

  const {posts ,setPosts  , setSearch} = useContext(DataContext)

  const navigate = useNavigate()
  const {id} = useParams() //1
  const post = posts.find((post)=> (post.id).toString() === id)
  const deletePost = (id) => {
    const newPostArrive = posts.filter(post => post.id !== id);
    setPosts(newPostArrive);
  };


  return (
    <div>
        {post && 
        <>
          <h1 className='text-2xl font-bold p-2'>{post.title}</h1>
          <p className=' p-2'>{post.date}</p>
          <h1 className=' p-2 '>{post.body}</h1>
          <button onClick={()=>{
            deletePost(post.id)
            navigate('/')
            setSearch('')
            }} className='bg-red-500 text-white px-4 py-2 rounded-md my-4 m-2 font-bold'> Delete Post </button>
          <Link to={`/edit/${post.id}`} className='bg-green-500 text-white px-4 py-2 rounded-md my-4 m-2 font-bold'> Edit Post </Link>
        </>}
      
    </div>
  )
}

export default PostPage