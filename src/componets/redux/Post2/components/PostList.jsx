import { useSelector } from "react-redux";
import { selectAllPosts } from "../features/post/postSlice";
import React from 'react'
import Users from "./Users";
import TimeAgo from "./TimeAgo";

const PostList = () => {

    const posts = useSelector(selectAllPosts)
    const rernderPosts = posts.map((post) => {
        return (<div key={post.id} className="mb-4 shadow-xl font-serif">
            <div className="bg-gray-500 text-center border-2 border-white rounded-md py-5">
                <h1> <span className="font-bold text-xl">Title :</span> {post.title}</h1>
                <h1> <span className="font-bold text-xl">Content :</span> {post.content.substring(0,100)}</h1>
                <h1 className="flex flex-col">  <Users userId={post.userId}/> <span> <TimeAgo timestamp={post.date}/></span> </h1>
                
            </div>
        </div>)
    })

  return (
    <div className='max-w-2xl mx-auto'>
       <hr className="my-4 bg-white md:bg-black rounded-lg p-[1px] w-2/3 mx-auto"/>
        <h1 className=" text-green-500 font-bold text-center my-6 text-4xl font-serif"> Posts</h1>
        <hr className="my-4 bg-white md:bg-black rounded-lg p-[1px] w-2/3 mx-auto"/>
        <h1 className="p-4 mb-8 shadow-xl" >{rernderPosts}</h1>
    </div>
  )
}

export default PostList