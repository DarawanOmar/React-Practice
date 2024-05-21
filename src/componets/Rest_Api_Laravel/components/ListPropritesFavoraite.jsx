import axios from "axios";
import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { GiCampCookingPot } from "react-icons/gi";
import { ImLocation } from "react-icons/im";
import { MdBookmarkAdded } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListPropritesFavoraite = ({ property, setReload }) => {
  const { isDark } = useSelector((state) => state.dark);

  const removePropertyToFavorairte = async () => {
    const response = await axios.post(
      `http://localhost:8000/api/createtablefavoraite`,
      { property_id: property.id, addtofavoraite: "false" },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      console.log("Property Remove  SuccessFully");
      setReload((prev) => !prev);
    } else {
      console.log("Faild Add");
    }
  };

  return (
    <div
      className={`${
        isDark
          ? " bg-zinc-900 text-white  duration-500"
          : "bg-neutral-100 text-black duration-500"
      } rounded-[30px] overflow-visible w-full `}
    >
      <div className="relative flex flex-col space-y-3 p-3">
        {/* Image */}
        <Link to={`/properties/property/${property.id}`}>
          {property.photos.length > 0 ? (
            <img
              className="rounded-[40px] w-full max-h-[160px] object-cover"
              src={property.photos}
              alt=""
            />
          ) : (
            <img
              className="rounded-[40px] w-full max-h-[160px] object-cover"
              src="https://img.freepik.com/free-photo/new-buildings-with-green-areas_1122-1533.jpg?size=626&ext=jpg&uid=R76012333&ga=GA1.2.656506428.1687210625&semt=sph"
              alt=""
            />
          )}
        </Link>
        {/* name & Price */}
        <div className="flex justify-between items-center py-2">
          <button
            onClick={removePropertyToFavorairte}
            className="absolute top-1 right-3 text-2xl rounded-full text-indigo-500 bg-white"
          >
            <MdBookmarkAdded />
          </button>
          <div className="font-bold text-lg flex items-center space-x-2 capitalize">
            <h1>
              {property.title.length > 15
                ? `${property.title.slice(0, 15)}..`
                : property.title}
            </h1>
          </div>
          <h1 className="text-blue-700 font-bold text-lg">{property.price}$</h1>
        </div>
        {/* Location & area */}
        <div className="flex justify-between items-center text-gray-400">
          <div className="flex items-center space-x-2">
            {" "}
            <span>
              <ImLocation />
            </span>{" "}
            <h1>{property.city.name}</h1>
          </div>
          <h1>({property.area}sqrt)</h1>
        </div>
        {/* Bed & Bath & kitchen */}
        <div className="flex space-x-4 md:space-x-10 px-4">
          <div className="text-gray-400 text-sm  flex items-center space-x-1">
            <span className="text-orange-600">
              <FaBed />
            </span>{" "}
            <h1 className="flex space-x-2">{property.bedroom}</h1>{" "}
            <span>Bed</span>{" "}
          </div>
          <div className="text-gray-400 text-sm  flex items-center space-x-1">
            <span className="text-orange-600">
              <FaBath />
            </span>{" "}
            <h1>{property.bathroom}</h1>
            <span>Bath</span>{" "}
          </div>
          <div className="text-gray-400 text-sm  flex items-center space-x-1">
            <span className="text-orange-600">
              <GiCampCookingPot />
            </span>
            <h1> {property.kitchen}</h1> <span>Kitchen</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListPropritesFavoraite;
