import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Edit = ({ posts, handleEdit }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id.toString() === id);

  const [editTitle, setEditTitle] = useState(post.title);
  const [editBody, setEditBody] = useState(post.body);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEdit(post.id, editTitle, editBody);
    navigate(`/postpage/${post.id}`);
  };

  return (
    <form className="font-serif">
      <h1 className="text-center text-2xl font-bld py-4">Edit Post Here</h1>
      <div className="mt-2 text-center">
        <input
          type="text"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Post Title"
          className="border-2 text-center text-xl border-black p-3 w-[22rem] md:w-full rounded-md shadow-2xl"
        />
      </div>
      <div className="mt-2 text-center">
        <textarea
          type="text"
          value={editBody}
          onChange={(e) => setEditBody(e.target.value)}
          placeholder="Post Content"
          className="border-2 text-xl border-black p-3 w-[22rem] h-[10rem] md:w-full rounded-md shadow-2xl"
        />
      </div>
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="bg-sky-500 text-white text-2xl p-3 w-[22rem] m-2 rounded-md mt-6"
        >
          Edit Post
        </button>
      </div>
    </form>
  );
};

export default Edit;
