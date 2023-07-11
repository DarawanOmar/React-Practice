import React from 'react'
import PostList from './PostList';
import { Link } from 'react-router-dom';

const Home = ({posts}) => {

  const renderPost = posts.map((post)=>(
    <div key={post.id}>
      <PostList post={post}/>
    </div>
  ))
  return (
    <div >
        <h1> {renderPost}</h1>
        
        {renderPost.length === 0  &&
        <>
          <p className='font-bold text-2xl text-center my-6 mt-40'> Post Display is Empty </p>
          <div className='flex  justify-center space-x-2'>
            <h1 className=' text-center '> You Can Create Post </h1>
            <Link to={'/newpost'} className='underline  text-blue-700'>Click Here</Link>
          </div>
        </>}
    </div>
  )
}

export default Home