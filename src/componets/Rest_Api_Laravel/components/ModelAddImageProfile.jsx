import React, { useState } from "react";
import axios from "axios";

const ModelAddImageProfile = ({ setShowAddImageProfile, setReload }) => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", image);

    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/addimageprofile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.SuccessFull) {
        setShowAddImageProfile(false);
        setReload((prev) => !prev);
      } else {
        console.log(response.data.Erros);
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
      <div className="flex flex-col px-3">
        <div className="px-2 rounded-md bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50">
          <div className="flex justify-between items-center p-1">
            <h1 className="font-bold text-xl">Add Image Profile</h1>
            <button
              onClick={() => setShowAddImageProfile(false)}
              className="bg-red-500 rounded-full w-5 h-5 flex justify-center items-center"
            >
              <span className="text-white">X</span>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid w-full max-w-sm items-center gap-4 py-2 px-6">
              <div className="flex h-32 w-full items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 p-4 text-center dark:border-gray-700 dark:bg-gray-800">
                <label htmlFor="file-upload" className="space-y-2">
                  <CloudUploadIcon className="mx-auto h-8 w-8 text-gray-500 dark:text-gray-400" />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Drag and drop an image here or click to upload.
                  </p>
                </label>
                <input
                  onChange={handleImageChange}
                  type="file"
                  id="file-upload"
                  hidden
                  className="hidden"
                />
              </div>
            </div>
            <div className="text-center pb-4 mt-4">
              <button
                type="submit"
                className="bg-indigo-500 text-white text-center rounded-lg py-2 px-7 w-full"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

function CloudUploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}

export default ModelAddImageProfile;
