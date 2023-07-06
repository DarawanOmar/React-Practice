import { useSelector } from "react-redux";
import { selectAllPost } from "../features/post/postSlice";
import React from 'react'
import PostAuther from "./PostAuther";

const PostList = () => {
    const posts = useSelector(selectAllPost)
    const rernderPosts = posts.map((post) => {
        return (<div key={post.id} className="mb-4">
            <div className="bg-gray-500 text-center border-2 border-white rounded-md py-5">
                <h1> <span className="font-bold text-xl">Title :</span> {post.title}</h1>
                <h1> <span className="font-bold text-xl">Content :</span> {post.content.substring(0,100)}</h1>
                <h1> <span className="font-bold text-xl"></span> <PostAuther userId={post.userId}/></h1>
            </div>
        </div>)
    })
  return (
    <div className="">
        <hr className="my-4 bg-white rounded-lg p-[1px] w-2/3 mx-auto"/>
        <h1 className=" text-green-500 font-bold text-center my-6 text-4xl font-serif"> Posts</h1>
        <hr className="my-4 bg-white rounded-lg p-[1px] w-2/3 mx-auto"/>
        <h1 className="p-4 mb-8" >{rernderPosts}</h1>
    </div>
  )
}

export default PostList