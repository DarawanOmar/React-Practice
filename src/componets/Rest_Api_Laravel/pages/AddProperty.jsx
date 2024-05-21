import React, { useEffect } from "react";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Lottie from "lottie-react";
import loaderbuilding from "../components/build.json";
import { Oval } from "react-loader-spinner";
import ModelAddImageProperty from "../components/ModelAddImageProperty";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { useSelector } from "react-redux";

const AddProperty = () => {
  const [loader, setLoader] = useState(false);
  const [sendLoader, setSendLoader] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [showAddRoom, setShowAddRoom] = useState(false);
  const [error, setError] = useState([]);
  const [cities, setCities] = useState([]);
  const [user, setUser] = useState([]);
  const [Catigorey, setCatigorey] = useState([]);
  const [idProperty, setIdProperty] = useState([]);
  const { isDark } = useSelector((state) => state.dark);

  const schema = yup.object().shape({
    title: yup.string().required("Write Your Title").min(3),
    description: yup
      .string()
      .required("Write Your Discription")
      .min(10, "Please More Than 10 Character")
      .max(200, "please less than 200 character"),
    price: yup
      .number()
      .typeError("$Price")
      .required("Write your Price")
      .positive("Please enter Positive Number"),
    area: yup
      .number()
      .typeError("Area")
      .required("Write your Area")
      .positive("Please enter Positive Number"),
    address: yup
      .string()
      .required("Write your Address")
      .min(6, "Atlest Write 6 Character")
      .max(50, "Your Address So Long"),
    catigorey_id: yup.number().required("Write your Catigorey"),
    city_id: yup.number().required("Write your City"),
    bedroom: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .typeError("Number")
      .positive("Positive"),
    bathroom: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .typeError("Number")
      .positive("Positive"),
    kitchen: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .typeError("Number")
      .positive("Positive"),
    garage: yup
      .number()
      .nullable()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .typeError("Number")
      .positive("Positive"),
  });

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setLoader(true);
    const fetchCatigoeryAndCitiy = async () => {
      const responseCatigoery = await axios.get(
        "http://localhost:8000/api/catigories",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const responseCities = await axios.get(
        "http://localhost:8000/api/cities",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      const user = await axios.get("http://localhost:8000/api/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      if (responseCatigoery && responseCities && user) {
        setCatigorey(responseCatigoery.data);
        setCities(responseCities.data);
        setUser(user.data);
        setLoader(false);
      } else {
        setError("No Catigory");
        setLoader(false);
      }
    };
    fetchCatigoeryAndCitiy();
  }, []);
  const submitForm = async (data) => {
    try {
      setSendLoader(true);
      const response = await axios.post(
        "http://localhost:8000/api/profile/properties/add",
        { ...data, user_id: user?.id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.Success) {
        reset();
        setSendLoader(false);
        setIdProperty(response.data.property.id);
        setShowModel(true);
      } else {
        console.log(response.data.Errors);
      }
    } catch (error) {
      setError(error.response.data.Errors);
    }
  };
  if (loader) {
    return (
      <div
        className={`flex justify-center items-center h-screen ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <span className="text-center">
          <Oval
            height={80}
            width={80}
            color="#4251B2"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4251B2"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </span>
      </div>
    );
  }
  if (sendLoader) {
    return (
      <div className="text-center mt-28 max-w-xs mx-auto">
        <Lottie animationData={loaderbuilding} loop={true} />
        <h1 className="text-3xl mt-3 font-bold italic">Loading...</h1>
      </div>
    );
  }
  return (
    <div
      className={
        isDark
          ? " bg-black text-white duration-500"
          : "bg-neutral-100 text-black duration-500"
      }
    >
      <div className=" flex justify-center items-center h-screen max-w-7xl mx-auto">
        <div
          className={` ${
            isDark
              ? " bg-black text-white duration-500"
              : "bg-neutral-100 text-black duration-500"
          } rounded-t-3xl w-full px-6`}
        >
          <div className="mt-4 ml-0">
            <Link to="/profile" className="cursor-pointer ">
              <IoMdArrowRoundBack />
            </Link>
            <h1 className="text-center font-bold text-xl md:text-2xl mb-2">
              Add Property
            </h1>
          </div>

          {/* Error */}
          {error.length > 0 ? (
            <h1 className="text-center bg-rose-500 rounded-xl p-2 my-2 text-white">
              {error[0]}
            </h1>
          ) : null}
          <form onSubmit={handleSubmit(submitForm)}>
            {/*  Title*/}
            <div className=" bg-white rounded-2xl p-2 my-3">
              {errors.title && (
                <h1 className="text-rose-500 text-md text-center">
                  {errors.title?.message}
                </h1>
              )}
              <input
                {...register("title")}
                type="text"
                className="p-2 md:p-3 focus:outline-none w-full text-center placeholder:text-center"
                placeholder="Title"
              />
            </div>
            {/* Discripton */}
            <div className=" border-b-2 bg-white rounded-2xl p-2 my-3">
              {errors.description && (
                <h1 className="text-rose-500 text-md text-center">
                  {errors.description?.message}
                </h1>
              )}
              <input
                {...register("description")}
                type="text"
                className="p-2 md:p-3 focus:outline-none w-full text-center placeholder:text-center"
                placeholder="Discription"
              />
            </div>
            {/* Area & Price */}
            <div className="flex items-center space-x-2">
              {/* Price */}
              <div className="border-b-2 bg-white rounded-2xl p-2 my-3 md:w-full">
                {errors.price && (
                  <h1 className="text-rose-500 text-md text-center">
                    {errors.price?.message}
                  </h1>
                )}
                <input
                  {...register("price")}
                  type="number"
                  className="p-3 focus:outline-none rounded-xl  w-full text-center placeholder:text-center"
                  placeholder="Price"
                />
              </div>
              {/*  Area*/}
              <div className="border-b-2 bg-white rounded-2xl p-2 my-3 md:w-full">
                {errors.area && (
                  <h1 className="text-rose-500 text-md text-center">
                    {errors.area?.message}
                  </h1>
                )}
                <input
                  {...register("area")}
                  type="number"
                  className="p-3 focus:outline-none rounded-xl  w-full text-center placeholder:text-center"
                  placeholder="Area"
                />
              </div>
            </div>
            {/* City & Catigorey */}
            <div className="flex justify-between items-center space-x-2">
              <select
                name="a"
                {...register("catigorey_id")}
                id="dd"
                className="md:p-4 focus:outline-none p-2 rounded-md w-full text-center"
              >
                <option value="" disabled>
                  Catigorey
                </option>
                {Catigorey.map((catigorey) => {
                  return (
                    <option key={catigorey.id} value={catigorey.id}>
                      {catigorey.name}
                    </option>
                  );
                })}
              </select>
              <select
                name="d"
                {...register("city_id")}
                id="aaa"
                className="md:p-4 focus:outline-none p-2 rounded-md w-full text-center"
              >
                <option value="" disabled>
                  City
                </option>
                {cities.map((city) => {
                  return (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  );
                })}
              </select>
            </div>
            {/*  Beth Bath Kitchen Garage*/}
            <div className="flex justify-between items-center mt-2">
              <h1 className="md:text-xl">Add Room (Optional)</h1>
              <span
                className="text-2xl md:text-3xl "
                onClick={() => setShowAddRoom((prev) => !prev)}
              >
                <MdOutlinePlaylistAdd />
              </span>
            </div>
            <div
              className={
                showAddRoom
                  ? " flex justify-between items-center space-x-2 duration-700 ease-in-out md:mt-3"
                  : "-translate-x-[1000px] duration-700 ease-in-out"
              }
            >
              {showAddRoom && (
                <>
                  <div className="">
                    {errors && (
                      <h1 className="text-rose-500">
                        {errors.bedroom?.message}
                      </h1>
                    )}
                    <input
                      {...register("bedroom")}
                      type="number"
                      className="text-center focus:outline-none rounded-md py-2 md:py-4 w-full placeholder:text-center"
                      placeholder="Bed"
                    />
                  </div>
                  <div className="">
                    {errors && (
                      <h1 className="text-rose-500">
                        {errors.bathroom?.message}
                      </h1>
                    )}
                    <input
                      {...register("bathroom")}
                      type="number"
                      className="text-center focus:outline-none rounded-md py-2 md:py-4 w-full placeholder:text-center"
                      placeholder="Bath"
                    />
                  </div>
                  <div className="">
                    {errors && (
                      <h1 className="text-rose-500">
                        {errors.kitchen?.message}
                      </h1>
                    )}
                    <input
                      {...register("kitchen")}
                      type="number"
                      className="text-center focus:outline-none rounded-md py-2 md:py-4 w-full placeholder:text-center"
                      placeholder="Kitchen"
                    />
                  </div>
                  <div className="">
                    {errors && (
                      <h1 className="text-rose-500">
                        {errors.garage?.message}
                      </h1>
                    )}
                    <input
                      {...register("garage")}
                      type="number"
                      className="w-full text-center focus:outline-none rounded-md py-2 md:py-4  placeholder:text-center"
                      placeholder="Garage"
                    />
                  </div>
                </>
              )}
            </div>
            {/* Address */}
            <div className="border-b-2 bg-white rounded-2xl p-2 my-3  ">
              {errors.address && (
                <h1 className="text-rose-500 text-md text-center">
                  {errors.address?.message}
                </h1>
              )}
              <input
                {...register("address")}
                type="text"
                className="p-2 md:p-3 focus:outline-none w-full text-center placeholder:text-center"
                placeholder="Address"
              />
            </div>
            {/* register Button */}
            <div className="text-center mt-3 pb-[70px]">
              <button
                type="submit"
                className="bg-gradient-to-b from-indigo-500  via-indigo-700  to-indigo-500 text-white py-4 px-20 rounded-xl"
              >
                Add Property
              </button>
            </div>
          </form>
        </div>
        {showModel && (
          <ModelAddImageProperty
            setShowModel={setShowModel}
            idProperty={idProperty}
          />
        )}
      </div>
    </div>
  );
};

export default AddProperty;
