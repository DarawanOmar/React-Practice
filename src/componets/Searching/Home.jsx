import React from 'react'
import PostList from './PostList'


const Home = ({searchResults}) => {

    const posts = searchResults.map(post => {
        return <PostList key={post.id} post ={post}/>
        })
      
        return (
          <div >
            <h1 className='text-center font-bold text-6xl my-6 text-white'> POSTS</h1>
            {posts}
          </div>
        )
}

export default Home