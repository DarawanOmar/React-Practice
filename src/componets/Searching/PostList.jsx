import React from 'react'
import { Link } from 'react-router-dom'


const PostList = ({post}) => {
  return (
    <div  className='flex flex-col gap-4 shadow-xl p-6 mb-4 text-white border-2 '>
      <Link to={`/postpage/${post.id}`}>
        <h1 className='text-2xl font-bold '>Title :  {(post.title).length <=20 ? post.title : ` ${(post.title).slice(0,20)}.....`} </h1>
      </Link>
      <Link to={`/postpage/${post.id}`}>
        <p> Body : {(post.body).length <=60 ? post.body : `${(post.body).slice(0,60)}.....`}</p>
      </Link>
      <h1>ID :  {post.id}</h1>
    </div>
  )
}

export default PostList