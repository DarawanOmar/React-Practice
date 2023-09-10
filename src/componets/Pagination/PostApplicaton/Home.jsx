import React from 'react'
import PostList from './PostList';
import { Link } from 'react-router-dom';
import { ScaleLoader } from 'react-spinners';
import { useContext } from 'react'
import { DataContext } from './Context/DataContext'


const Home = () => {

  const {searchResults , isLoading } = useContext(DataContext)


  const renderPost = searchResults.map((post)=>(
    <div key={post.id}>
      <PostList post={post}/>
    </div>
  ))
  if(isLoading){
    return(
      <div className='text-center mt-28'>
        <h1 className='text-5xl my-6 font-bold text-sky-500 '>Loading...</h1>
        <ScaleLoader width={'2rem'} height={'8rem'} color='#5691e0'/>
      </div>
    )
  }
  return (
    <div >
      <h1 className='text-6xl font-serif  font-bold text-center my-6 '> Posts</h1>
      
        <h1 className=''> {renderPost}</h1>
        
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