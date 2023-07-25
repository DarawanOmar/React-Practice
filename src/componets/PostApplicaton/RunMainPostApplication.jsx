import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import MissingPage from './MissingPage';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Edit from './Edit';
import DataProvider from './Context/DataContext';
import Image from './Image';
const RunMainPostApplication = () => {

  return (
    <div className="max-w-3xl mx-auto">
      <Header />
      <DataProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newpost" element={ <NewPost />}/>
            <Route path="/postpage/:id" element={<PostPage  />}/>
            <Route path="/edit/:id"element={<Edit />}/>
            <Route path="about" element={<About />} />
            <Route path="*" element={<MissingPage />} />
            <Route path='/image' element={<Image/>}/>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
};

export default RunMainPostApplication;
