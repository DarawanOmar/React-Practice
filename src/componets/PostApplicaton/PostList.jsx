import React from 'react'
import { Link } from 'react-router-dom'

const PostList = ({post}) => {
  return (
    <div className=' shadow-xl m-2 md:m-0 '>
      
        <div className='p-2  flex flex-col'>
            <Link to={`/postpage/${post.id}`} className='text-2xl font-bold '>{(post.title).length <= 20 ? post.title : `${(post.title).slice(0,20)}......`}</Link>
            <Link className='text-gray-500 py-2 ' to={`/postpage/${post.id}`} >{(post.body).length <= 60 ? post.body : `${(post.body).slice(0,60)}......`}</Link>
            <h1> {post.date}</h1>
        </div>
      
    </div>
  )
}

export default PostList