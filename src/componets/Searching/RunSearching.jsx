import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import { useState, useEffect } from "react";
import { getPosts } from "./api/axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPosts from "./AddPosts";
import PostPage from "./PostPage";
import EditPosts from "./EditPosts";
import About from "./About";
import axios from "axios";
import api from './api/posts'


const RunSearching = () => {
  const url = "http://localhost:3500/Posts1";
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResult] = useState([]);
  const [search, setSearch] = useState();
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(true);



  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        try {
          const res = await api.get(`/Posts1`);
          setPosts(res.data);
          setisLoading(false);
        } catch (error) {
          if (error.response) {
            setError(`${error.response.status} - Something went Status!`);
            setError(`${error.response.data} - Something went Data!`);
            setError(`${error.response.headers} - Something went Header!`);
            setisLoading(false);
          } else {
            setError(`Error : ${error.message}`);
            console.log(`Error : ${error.message}`);
            setisLoading(false);
          }
        }
      };
      fetchData();
    }, 1000);
  }, []);

  // useEffect(() => {
    // getPosts().then(json => {
    //   setPosts(json)
    //   return json
    // }).then(json => setSearchResult(json))
    // const fetchPosts = async () => {
    //   try {
    //     const res = await fetch(url);
    //     if(!res.ok) throw Error(" Some Thing Went Wrong In Your URL Checkt Again")
    //     const allPosts = await res.json();
    //     setPosts(allPosts)
    //   } catch (error) {
    //     setError(error.message);
    //   } finally{
    //     setisLoading(false)
    //   }
    // }
    // setTimeout(()=>{
    //   fetchPosts()
    // } ,1000)
  // }, []);

  useEffect(() => {
    const handelSetSearch = () => {
      if (!search) return setSearchResult(posts);

      const resultArray = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(search) ||
          post.body.toLowerCase().includes(search)
      );
      setSearchResult(resultArray);
    };
    handelSetSearch();
  }, [posts, search]);

  return (
    <div className="font-serif bg-black max-w-2xl mx-auto ">
      <BrowserRouter>
        <NavBar
          posts={posts}
          setPosts={setPosts}
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchResults={searchResults}
                error={error}
                isLoading={isLoading}
              />
            }
          />
          <Route
            path="addpost"
            element={
              <AddPosts setPosts={setPosts} posts={posts} setError={setError} />
            }
          />
          <Route
            path="postpage/:id"
            element={
              <PostPage
                setSearch={setSearch}
                posts={posts}
                setError={setError}
                setPosts={setPosts}
              />
            }
          />
          <Route
            path="/editpost/:id"
            element={<EditPosts posts={posts} setPosts={setPosts} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RunSearching;
