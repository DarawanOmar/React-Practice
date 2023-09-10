import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AddPost from './pages/AddPost'
import Login from './pages/Login'
import UpdatePost from './components/UpdatePost'

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/addpost" element={<AddPost/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/update/:docId" element={<UpdatePost/>} />
        </Routes>
    </div>
  )
}

export default App