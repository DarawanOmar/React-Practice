import { collection, getDocs } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { auth, db } from '../config/firebase';
import PostList from '../components/PostList';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const postRef = collection(db, "posts");
  const[user] = useAuthState(auth)
  const getPost = async () => {
    const data = await getDocs(postRef);
    setPosts(data.docs.map((doc) => ({ ...doc.data(), docId: doc.id })));
  };

  useEffect(() => {
    getPost();
  }, []);

  const showDeleteNotification = () => {
    toast.error("Post Delete SuccessFully");
  };


  const handelDeletePost = (deleteDoc) => {
    setPosts((prev) => prev.filter((doc) => doc.docId !== deleteDoc));
  };
  return (
    <div className='max-w-4xl mx-auto'>
      {user ? (
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {posts.map(post => {
                return <PostList key={post.docId} {...post} showDeleteNotification={showDeleteNotification} handelDeletePost={handelDeletePost} />
            })}
        </div>
      ):(
        <div className=" text-center">
          <h1 className='text-center text-xl italic my-3'> Please Login To See Posts....</h1>
          <Link to='/login' className='btn-action '>Login</Link>
        </div>
      )}
        <ToastContainer
            position='top-right'
            theme='light'
            transition={Bounce}
        />
    </div>
  )
}

export default Home