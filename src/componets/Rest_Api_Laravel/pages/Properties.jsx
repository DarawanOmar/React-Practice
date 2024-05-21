import React, { useEffect, useState } from "react";
import { BiFilter } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import axios from "../api/axios";
import PropertiesPage from "../components/PropertiesPage";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import RangeSliderPrice from "../components/RangeSliderPrice";
import RangeSliderArea from "../components/RangeSliderArea";
import { useSelector } from "react-redux";

const MIN_PRICE = 1000;
const MAX_PRICE = 100000;
const MIN_AREA = 100;
const MAX_AREA = 10000;

const Properties = () => {
  const [originalProperties, setOriginalProperties] = useState([]);
  const [displayedProperties, setDisplayedProperties] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(true);
  const [filter, setFilter] = useState(false);
  const [valuesPrice, setValuesPrice] = useState([MIN_PRICE, MAX_PRICE]);
  const [valuesArea, setValuesArea] = useState([MIN_AREA, MAX_AREA]);
  const { isDark } = useSelector((state) => state.dark);

  const fetchData = async (page) => {
    const data = await axios.get(`/allproperties?page=${page}`);
    setOriginalProperties(data.data.allProperties.data);
    setDisplayedProperties((prev) => [
      ...prev,
      ...data.data.allProperties.data,
    ]);
  };
  useEffect(() => {
    fetchData(page);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  }, [page]);

  const handleFilter = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/properties?area[0]=${valuesArea[0]}&area[1]=${valuesArea[1]}&price[0]=${valuesPrice[0]}&price[1]=${valuesPrice[1]}`
    );
    setDisplayedProperties(response.data.properties.data);
  };

  // Input Search
  const searchProperties = (name) => {
    const filtered = originalProperties.filter((property) => {
      return (
        property.catigorey.name.toLowerCase().includes(name.toLowerCase()) ||
        property.city.name.toLowerCase().includes(name.toLowerCase()) ||
        property.title.toLowerCase().includes(name.toLowerCase())
      );
    });
    setDisplayedProperties(filtered);
  };

  const handleSearch = (name) => {
    if (name) {
      searchProperties(name);
    } else {
      setDisplayedProperties(originalProperties);
    }
    setSearch(name);
  };

  const filterButton = () => {
    setFilter((prev) => !prev);
  };

  if (loader) {
    return (
      <div
        className={
          isDark
            ? " bg-black text-white min-h-screen"
            : "bg-neutral-100 text-black"
        }
      >
        <div
          className={`max-w-7xl mx-auto ${
            isDark ? " bg-black text-white" : "bg-neutral-100 text-black"
          }`}
        >
          <div className="flex justify-between items-center space-x-3 px-4">
            <p className="w-full h-10 rounded-md bg-gray-300 animate-pulse"></p>
            <p className="w-1/2 h-10 rounded-md bg-gray-300 animate-pulse"></p>
          </div>
          <div className="lex flex-col space-y-3 p-3">
            <p className="rounded-[40px] w-full h-[140px] bg-gray-300 animate-pulse"></p>
            <div className="flex justify-between items-center px-4">
              <p className="bg-gray-300 rounded-md h-6 w-32 animate-pulse"></p>
              <p className="bg-gray-300 rounded-md h-6 w-10 animate-pulse"></p>
            </div>
            <p className="bg-gray-300 h-6 rounded-md w-52 mt-2 animate-pulse ml-4">
              {" "}
            </p>
            <div className="flex space-x-4 px-2 mt-2 ml-4">
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
            </div>
          </div>
          <div className="lex flex-col space-y-3 p-3">
            <p className="rounded-[40px] w-full h-[140px] bg-gray-300 animate-pulse"></p>
            <div className="flex justify-between items-center px-4">
              <p className="bg-gray-300 rounded-md h-6 w-32 animate-pulse"></p>
              <p className="bg-gray-300 rounded-md h-6 w-10 animate-pulse"></p>
            </div>
            <p className="bg-gray-300 h-6 rounded-md w-52 mt-2 animate-pulse ml-4">
              {" "}
            </p>
            <div className="flex space-x-4 px-2 mt-2 ml-4">
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
              <div className="bg-gray-300 h-5 rounded-md w-8 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handlePage = () => {
    setPage((prev) => !prev);
  };

  return (
    <div
      className={
        isDark
          ? " bg-black text-white   duration-500"
          : "bg-neutral-100 text-black duration-500"
      }
    >
      <div
        className={`max-w-7xl mx-auto ${
          isDark
            ? " bg-black text-white  duration-500 "
            : "bg-neutral-100 text-black duration-500"
        } `}
      >
        <Link to="/home" className="flex md:hidden items-center space-x-1 p-3">
          <h1 className="text-xl text-indigo-500">
            <IoIosArrowBack />
          </h1>
          <h1 className="text-xl font-bold">Home</h1>
        </Link>
        {/* Search & Filter */}
        <div className="flex justify-between py-4 md:space-x-6 px-4 pt-10">
          <div className="flex bg-white items-center rounded-2xl mr-2">
            <span className="text-blue-600  p-2 text-2xl">
              <FiSearch />
            </span>
            <input
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              className="p-3 bg-white focus:outline-none text-black  rounded-lg  placeholder:text-gray-400 shadow-sm"
              type="text"
              placeholder="Catigorey || City || Title"
            />
          </div>
          <div>
            <div className="flex items-center space-x-2 bg-blue-700 rounded-xl px-4 py-[11px] ">
              <h1 className="bg-white rounded-full flex justify-center items-center w-5 h-5 text-blue-700">
                <BiFilter />
              </h1>
              <button onClick={filterButton} className="text-white md:text-xl">
                Filters
              </button>
            </div>
          </div>
        </div>
        {/* Filter Price & Area */}
        <div
          className={
            filter
              ? `w-full h-[500px] fixed md:static bottom-[54px] rounded-t-[40px] p-4  ease-in-out duration-500 z-10 ${
                  isDark
                    ? " bg-black text-white  "
                    : "bg-neutral-100 text-black"
                }`
              : " translate-y-72 ease-in-out duration-500"
          }
        >
          {filter && (
            <>
              <button className="font-bold text-lg" onClick={filterButton}>
                x
              </button>
              <h1 className="text-center text-2xl font-bold ">Filter</h1>
              <h1 className="text-xl font-bold mt-5 ">Property Type </h1>
              <div className="mt-10 ">
                <div className="flex justify-between items-center ">
                  <h1 className="font-bold text-md">Property Price</h1>
                </div>
                <div className="flex justify-between items-center ">
                  <h1 className="text-gray-400 text-sm">Low</h1>
                  <h1 className="text-gray-400 text-sm mr-4">High</h1>
                </div>
                <RangeSliderPrice
                  valuesPrice={valuesPrice}
                  setValuesPrice={setValuesPrice}
                  MIN_PRICE={MIN_PRICE}
                  MAX_PRICE={MAX_PRICE}
                />
              </div>
              <div className="mt-16">
                <div className="flex justify-between items-center ">
                  <h1 className="font-bold text-md">Property Area</h1>
                </div>
                <div className="flex justify-between items-center ">
                  <h1 className="text-gray-400 text-sm">Low</h1>
                  <h1 className="text-gray-400 text-sm mr-4">High</h1>
                </div>
                <RangeSliderArea
                  valuesArea={valuesArea}
                  setValuesArea={setValuesArea}
                  MIN_AREA={MIN_AREA}
                  MAX_AREA={MAX_AREA}
                />
              </div>
              <div className=" mt-16 flex justify-between items-center">
                <button
                  onClick={() => {
                    setValuesPrice([MIN_PRICE, MAX_PRICE]);
                    setValuesArea([MIN_AREA, MAX_AREA]);
                  }}
                  className="text-center text-white  text-lg bg-blue-700  py-[5px] rounded-md px-6"
                >
                  Reset
                </button>
                <a
                  href="#2"
                  className="text-center text-white  text-lg bg-blue-700  py-[5px] rounded-md px-6 "
                >
                  <button
                    onClick={() => {
                      handleFilter();
                      filterButton();
                    }}
                  >
                    Filter
                  </button>
                </a>
              </div>
            </>
          )}
        </div>

        {/* Propserties */}
        <h1 className="text-xl font-bold ml-4 mb-6">All Properties</h1>
        {displayedProperties.length > 0 ? (
          <div
            id="2"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-16"
          >
            {displayedProperties.map((property, index) => {
              return <PropertiesPage key={index} {...property} />;
            })}
          </div>
        ) : (
          <h1 className="text-center font-bold text-2xl mt-20 min-h-screen">
            {" "}
            <span className="text-rose-500">( {search} )</span> Not Found
          </h1>
        )}
        {displayedProperties.length < 100 && (
          <div className="text-center">
            <button
              onClick={handlePage}
              className="btn-action mb-10 py-2 px-10 duration-500 hover:opacity-70"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Properties;
