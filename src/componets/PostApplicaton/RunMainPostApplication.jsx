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
import { ScaleLoader } from 'react-spinners';

const RunMainPostApplication = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isLoading , setisLoading] = useState(true)
  const[search,setSearch] = useState([]);



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
        setSearch(res.data)
        setisLoading(false)
      } catch (error) {     
          console.log(`Errorss : ${error.message}`);
      }
    }
    Fetch_Data()

  } , [])

  if(isLoading){
    return(
      <div className='text-center mt-64'>
        <h1 className='text-4xl font-bold text-sky-500 '>Loading...</h1>
        <ScaleLoader width={'1rem'} height={'8rem'} color='#5691e0'/>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <BrowserRouter>
        <NavBar  posts={posts} setSearch={setSearch}/>
        <Routes>
          <Route path="/" element={<Home posts={search} />} />
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
