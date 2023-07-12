import React from 'react'

import Posts from './Posts'
const PostList = ({searchResults}) => {

  const posts = searchResults.map(post => {
  return <Posts key={post.id} post ={post}/>
})

  return (
    <div>
      {posts}
    </div>
  )
}

export default PostList