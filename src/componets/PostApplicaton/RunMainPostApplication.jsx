import React, { useEffect, useState } from 'react';
import NavBar from './NavBar';
import Header from './Header';
import MissingPage from './MissingPage';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import { nanoid } from '@reduxjs/toolkit';
import format from 'date-fns/format';
import Edit from './Edit';
import axios from 'axios';

const RunMainPostApplication = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading , setisLoading] = useState(true)
  const[search,setSearch] = useState('');
  const[searchResults,setSearchResults] = useState([]);



  const onSubmit = () => {
    const newPostAdd = {id: nanoid(),title: title,body: body,date: format(new Date(), "MM dd yyyy pp")};
    setPosts([newPostAdd, ...posts]);
    setBody('');
    setTitle('');
  };
//                    3
  const handleEdit = (id, updatedTitle, updatedBody) => {
    setPosts(posts.map(post => post.id === id ? { ...post, title: updatedTitle, body: updatedBody } : post) );
  };

  const deletePost = (id) => {
    const newPostArrive = posts.filter(post => post.id !== id);
    setPosts(newPostArrive);
  };

  const url = "https://jsonplaceholder.typicode.com/posts"
  useEffect(()=>{

    const Fetch_Data = async ()=>{
      try {
        const res = await axios(url)
        setPosts(res.data)
        setisLoading(false)
      } catch (error) {     
          console.log(`Errorss : ${error.message}`);
      }
    }
    Fetch_Data()

  } , [])

  useEffect(()=>{
    const handelSetSearch = ()=>{
      if(!search) return setSearchResults(posts)
  
      const resultArray = posts.filter(post => post.title.includes(search) || post.body.includes(search))
      setSearchResults(resultArray)
    }
    handelSetSearch()
  },[posts,search])


  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <BrowserRouter>
        <NavBar   setSearch={setSearch} search={search}/>
        <Routes>
          <Route path="/" element={<Home posts={searchResults} isLoading={isLoading} />} />
          <Route path="/newpost" element={ <NewPost onSubmit={onSubmit} title={title} body={body} setTitle={setTitle} setBody={setBody}/>}/>
          <Route path="/postpage/:id" element={<PostPage posts={posts} deletePost={deletePost} />}/>
          <Route path="/edit/:id"element={<Edit posts={posts} handleEdit={handleEdit} />}/>
          <Route path="about" element={<About />} />
          <Route path="*" element={<MissingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RunMainPostApplication;
