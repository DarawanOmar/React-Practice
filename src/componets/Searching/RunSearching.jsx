import React from 'react'
import SearchForm from './SearchForm'
import PostList from './PostList'
import { useState,useEffect } from 'react'
import {getPosts} from './api/axios'

const RunSearching = () => {
    const [posts , setPosts] = useState([])
    const [searchResults , setSearchResult] = useState([])

    useEffect(()=>{
        getPosts().then(json => {
          setPosts(json)
          return json
        }).then(json => setSearchResult(json))
    },[])


  return (
    <div className='font-serif bg-black max-w-2xl mx-auto p-4'>
        <SearchForm posts={posts} setSearchResult={setSearchResult} />
        <h1 className='text-center font-bold text-4xl my-6 text-green-500'> POSTS</h1>
        <PostList searchResults={searchResults}/>
    </div>
  )
}

export default RunSearching