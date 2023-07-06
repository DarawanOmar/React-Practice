import { useState } from "react";
import { useDispatch , useSelector} from "react-redux";
import { addPost } from "../features/post/postSlice";
import { selectAllUsers } from "../features/users/usersSlice";
import React from 'react'
import { boolean } from "yup";

const AddPostForm = () => {
    const [title,setTitle] = useState()
    const [content,setContent] = useState()
    const [userId,setUserId] = useState()
    const dispatch = useDispatch()

    const users = useSelector(selectAllUsers)

    const onSavePostClick = ()=>{
        if(title && content){
            dispatch(
                addPost(title , content , userId))
            setContent('')
            setTitle('')
            setUserId('')
        }
    }

    const canSaveBtn = boolean(title) && boolean(content) && boolean(userId)

    const userOptions = users.map((user)=> 
     (
        <option className="text-black font-bold text-center font-serif" key={user.id} value={user.id}>
            {user.name}
        </option>
    ))

  return (
    <div>
        <div>
            <h1 className="font-bold text-green-500 text-center py-6 text-4xl font-serif"> Add a  New Post</h1>
            <hr className="my-4 bg-white rounded-lg p-[1px] w-2/3 mx-auto"/>
            <form className="text-center p-5 my-5">
                <div className="border-2 border-white  rounded-md p-3">
                    <div className="my-6 flex flex-col">
                        <label >Post Title : </label>
                        <input value={title} placeholder="Ex.Title" className="border-2 text-center text-black  border-black p-2 rounded-md " type="text" onChange={(e)=> setTitle(e.target.value)} />
                    </div>

                    <select className="w-1/2 p-2 text-black" value={userId} onChange={(e)=> setUserId(e.target.value)}>
                    <option value="" ></option>
                       {userOptions}
                    </select>

                    <div className="flex flex-col">
                        <label > Contact :</label>
                        <input value={content} placeholder="Ex.Contact" className="border-2 text-center text-black  border-black p-2 rounded-md " type="text" onChange={(e)=> setContent(e.target.value)} />
                    </div>
                    <button disabled = {!canSaveBtn} type="button" onClick={()=> onSavePostClick()} className="hover:bg-white hover:text-black hover:duration-500 active:opacity-50 border-2 border-white  text-white my-4 px-4 py-2 rounded-md "> Save Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPostForm