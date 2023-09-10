import { deleteDoc, doc } from 'firebase/firestore'
import React from 'react'
import {MdDelete} from 'react-icons/md'
import {RiEdit2Fill} from 'react-icons/ri'
import { auth, db } from '../config/firebase'
import { Link } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'

const PostList = ({username, image, title, date,docId, showDeleteNotification, handelDeletePost, userId}) => {
  const[user] = useAuthState(auth)
    const deletePost = async () => {
        try {
            await deleteDoc(doc(db,"posts",docId))
            showDeleteNotification()
            handelDeletePost(docId)
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div className='flex flex-col shadow-xl p-4 rounded-md bg-neutral-200'>
        <div className="flex justify-between items-center space-x-4 py-2 border-b-2 border-orange-500">
            <div className='flex items-center space-x-2'>
                <h1 className=' text-lg font-bold italic'>{username}</h1>
                <img src={image} alt={username} className='w-8 h-8 rounded-full' />
            </div>
            {user?.uid === userId ? (

            <div className="flex space-x-2">
                <button onClick={deletePost} className='text-xl hover:text-red-500 duration-500'> <MdDelete/> </button>
                <Link to={`/update/${docId}`} className='text-xl hover:text-green-500 duration-500'> <RiEdit2Fill/> </Link>
            </div>
            ): null}
        </div>
        <div className="my-2">
            {title}
        </div>
        <div className="flex justify-between items-center">
            <button  className='flex items-center'> <span className='text-gray-500'></span>
                {/* {likes.length > 0 && <h1>{likes?.length}</h1> }  */}
                </button>
            {date}
        </div>
    </div>
  )
}

export default PostList