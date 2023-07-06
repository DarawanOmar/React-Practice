import React from 'react'
import { useState } from 'react'
import { addPost } from '../features/post/postSlice'
import { useDispatch , useSelector } from 'react-redux'
import { selectAllUsers } from '../features/users/userSlice'
import { boolean } from 'yup'
const AddPostForm = () => {

    const [title,setTitle] = useState();
    const [content,setContent] = useState();
    const dispatch = useDispatch();
    const [userId, setUserId] = useState()

    const users = useSelector(selectAllUsers)

    const onSubmitClickBtn = ()=>{
        if(title && content){
            dispatch(addPost(title,content,userId)) 
            setContent('')
            setTitle('')
            setUserId('')
        }
    }

    const canSave = boolean(title) && boolean(content)&&boolean(userId)

    const optionUsers = users.map((user)=>(
        <option className='text-center' key={user.id} value={user.id}>
            {user.name}
        </option>
    )

    )

  return (
    <div className='max-w-2xl mx-auto font-serif'>

         <div>
            <h1 className="font-bold text-green-500 text-center pt-8 text-4xl font-serif"> Add a  New Post</h1>
            <hr className="my-8 bg-white rounded-lg p-[1px] w-2/3 mx-auto"/>
            <form className="text-center p-5 my-5 shadow-xl border-2 border-white rounded-md">
                <div className="border-2 border-white md:border-black  rounded-md p-3">
                    <div className="my-6 flex flex-col">
                        <label className='md:text-left text-xl '>Post Title : </label>
                        <input value={title} placeholder="Ex.Title" className="border-2 text-center text-black  border-black p-2 rounded-md " type="text" onChange={(e)=> setTitle(e.target.value)} />
                    </div>

                    <select value={userId} className='my-4 text-black  font-bold font-serif w-full rounded-sm p-2' onChange={(e)=> setUserId(e.target.value)}>
                        <option value="" className='text-center'>Select User</option>
                        {optionUsers}
                    </select>

                    <div className="flex flex-col">
                        <label className='md:text-left text-xl '> Content :</label>
                        <input value={content} placeholder="Ex.Contact" className="border-2 text-center text-black  border-black p-2 rounded-md " type="text" onChange={(e)=> setContent(e.target.value)} />
                    </div>
                    <button disabled={!canSave} onClick={onSubmitClickBtn} type="button"  className=" hover:bg-white  hover:text-black hover:duration-500 active:opacity-50 border-2 border-white  text-white mt-8 px-4 py-2 rounded-md "> Save Post</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPostForm