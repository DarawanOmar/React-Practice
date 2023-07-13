import React from 'react'
import NavBar from './NavBar'
import Home from './Home'
import { useState,useEffect } from 'react'
import {getPosts} from './api/axios'
import { BrowserRouter , Routes , Route } from "react-router-dom";
import AddPosts from './AddPosts'
import PostPage from './PostPage'
import EditPosts from './EditPosts'
import About from './About'


const RunSearching = () => {
    const [posts , setPosts] = useState([])
    const [searchResults , setSearchResult] = useState([])
    const [search,setSearch] = useState()

    useEffect(()=>{
        getPosts().then(json => {
          setPosts(json)
          return json
        }).then(json => setSearchResult(json))
    },[])
    
    useEffect(()=>{
      const handelSetSearch = ()=>{
        if(!search) return setSearchResult(posts)
    
        const resultArray = posts.filter(post => post.title.includes(search) || post.body.includes(search))
        setSearchResult(resultArray)
      }
      handelSetSearch()
    },[posts,search])



  return (
    <div className='font-serif bg-black max-w-2xl mx-auto '>

        <BrowserRouter>
        <NavBar posts={posts} setPosts={setPosts} search={search} setSearch={setSearch}/>
          <Routes>
            <Route path='/' element={<Home searchResults={searchResults}/>}/>
            <Route path='addpost' element={<AddPosts setPosts={setPosts} posts={posts}/>}/>
            <Route path='postpage/:id' element={<PostPage posts={posts} setPosts={setPosts}/>}/>
            <Route path='/editpost/:id'  element={<EditPosts posts={posts} setPosts={setPosts}/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RunSearching