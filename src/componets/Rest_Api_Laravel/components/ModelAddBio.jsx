import React from "react";
import { useState } from "react";
import axios from "axios";

const ModelAddBio = ({ setShowAddBio, setReload }) => {
  const [bio, setBio] = useState("");

  const submitFomr = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/api/addbio",
      { bio },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response) {
      setReload((prev) => !prev);
      setShowAddBio(false);
    } else {
      console.log("Faild Add Bio");
    }
  };

  return (
    <div className="fixed inset-0 z-10 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
      <div className="flex flex-col px-3 p">
        <div className=" rounded-md bg-gradient-to-r from-indigo-50  via-indigo-200  to-indigo-50">
          <div className="flex justify-between items-center p-2">
            <h1 className="font-bold text-lg">Add Bio</h1>
            <button
              onClick={() => setShowAddBio(false)}
              className="bg-red-500 rounded-full w-5 h-5 flex justify-center items-center"
            >
              <span className="text-white">X</span>
            </button>
          </div>

          <form onSubmit={submitFomr} className="px-10">
            <div className="bg-white rounded-md p-2 mt-2 ">
              <textarea
                onChange={(e) => setBio(e.target.value)}
                className="rounded-md text-center placeholder:text-center placeholder:text-gray-400  focus:outline-none"
                placeholder="Bio"
                cols="30"
                rows="2"
              ></textarea>
            </div>
            <div className="text-center pb-4 px-2 mt-4">
              <button
                type="submit"
                className="bg-indigo-500 text-white text-center rounded-lg py-2 px-7 w-full"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModelAddBio;
