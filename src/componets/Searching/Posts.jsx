import React from 'react'

const Posts = ({post}) => {
  return (
    <div  className='flex flex-col gap-4 shadow-xl p-6 mb-4 text-white border-2 '>
      <h1 className='text-2xl font-bold '>Title :  {post.title}</h1>
      <p> Body : {post.body}</p>
      <h1>ID :  {post.id}</h1>
    </div>
  )
}

export default Posts