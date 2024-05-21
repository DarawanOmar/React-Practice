import React from "react";
import intro01 from "../img/intro001.svg";
import { Link } from "react-router-dom";

const Intro01 = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-col h-screen font-serif">
      <img
        src={intro01}
        className="md:max-h-[400px] w-[600px] mx-auto object-cover"
        alt="Intro01"
      />
      <h1 className="text-center font-bold text-xl p-3 md:text-5xl md:mt-10">
        Buy Your Dream House
      </h1>
      <div className="flex justify-around items-center space-x-32 mt-16 p-8 pb-16 ">
        <Link to="/login" className="text-lg md:text-2xl">
          Skip
        </Link>
        <Link to="/intro02" className="text-blue-500 text-lg md:text-2xl">
          Next
        </Link>
      </div>
    </div>
  );
};

export default Intro01;
