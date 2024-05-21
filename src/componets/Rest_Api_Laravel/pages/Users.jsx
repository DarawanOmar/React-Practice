import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ListUser from "../components/ListUser";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useSelector } from "react-redux";

const Users = () => {
  const [user, setuser] = useState([]);
  const [searchResult, setsearchResult] = useState([]);
  const [search, setsearch] = useState("");
  const { isDark } = useSelector((state) => state.dark);

  useEffect(() => {
    const ftechUser = async () => {
      const response = await axios.get("http://localhost:8000/api/users", {
        headers: { Accept: "application/json" },
      });
      if (response.data) {
        setuser(response.data);
      } else {
        console.log("error");
      }
    };
    ftechUser();
  }, []);

  useEffect(() => {
    search
      ? setsearchResult(
          user.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          )
        )
      : setsearchResult(user);
  }, [search, user]);

  return (
    <div
      className={
        isDark
          ? " bg-black text-white min-h-screen duration-500"
          : "bg-neutral-100 text-black duration-500"
      }
    >
      <div
        className={`${
          isDark
            ? " bg-black text-white  duration-500"
            : "bg-neutral-100 text-black duration-500"
        } max-w-7xl mx-auto`}
      >
        {/* Top text Back Button */}
        <div className="flex justify-between items-center p-2">
          <div className="flex items-center space-x-3">
            <Link to="/properties" className="text-xl text-indigo-500">
              <IoIosArrowBack />
            </Link>
            <h1 className="text-xl font-bold mb-1 ">Property Owners</h1>
          </div>
        </div>
        {/* Filter Search */}
        <div className="px-6 mt-5">
          <div className="flex bg-white items-center rounded-2xl">
            <span className="text-blue-600  p-2 text-2xl">
              <FiSearch />
            </span>
            <input
              onChange={(e) => setsearch(e.target.value)}
              value={search}
              className="p-3 bg-white text-black focus:outline-none  rounded-lg  placeholder:text-gray-400 shadow-sm"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
        {/* Users */}
        {searchResult.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 pb-20">
            {searchResult.map((user) => {
              return <ListUser key={user.id} {...user} />;
            })}
          </div>
        ) : (
          <h1 className="text-center font-bold text-xl mt-20 h-screen">
            {" "}
            User <span className="text-rose-500"> ( {search} ) </span> Not Found
          </h1>
        )}
      </div>
    </div>
  );
};

export default Users;
