import React, { useState } from 'react';
import axios from 'axios';
import imageUpload from '../components/upload File.json';
import Lottie from 'lottie-react';
import { useNavigate } from 'react-router-dom';

const ModelAddImageProperty = ({ idProperty, setShowModel }) => {
    const [image, setImage] = useState(null);
    const navigate = useNavigate()


    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post(`http://localhost:8000/api/profile/properties/upload/image/${idProperty}`, formData,{headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Accept': 'application/json',
              'Content-Type': 'multipart/form-data'
          }});

            if (!response.data.errors) {
              setShowModel(false)
              navigate('/home')
            } else{
                console.log(response.data.errors);
            }
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
            <div className="flex flex-col px-3">
                <div className="px-2 rounded-md bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50">
                    <div className="flex justify-between items-center p-1">
                        <h1 className="font-bold text-xl">Add Image Property</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className=" rounded-2xl p-2 mt-2 px-32">
                            <label htmlFor="file-upload">
                                <Lottie animationData={imageUpload} loop={true} />
                            </label>
                            <input
                                type="file"
                                id="file-upload"
                                onChange={handleImageChange}
                                className="hidden w-full text-slate-500 file:border-0 file:p-2 file:bg-indigo-50 file:rounded-2xl file:text-indigo-700 file:font-semibold hover:file:bg-indigo-100"
                            />
                        </div>
                        <div className="text-center pb-4 mt-4">
                            <button type="submit" className="bg-indigo-500 text-white text-center rounded-lg py-2 px-7 w-full">
                                Upload
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModelAddImageProperty;
