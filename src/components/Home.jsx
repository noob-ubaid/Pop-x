import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="flex h-full justify-end flex-col ">
      <h4 className="text-[#1D2226] text-2xl md:text-3xl font-bold">
        Welcome to PopX
      </h4>
      <p className="text-[#1D2226] opacity-60 mt-3 mb-6 text-lg">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>
      <Link
        to={`/register`}
        className="bg-[#6C25FF] text-center w-full mb-3 py-2 rounded text-white font-medium"
      >
        Create Account
      </Link>
      <Link
        to={`/login`}
        className="bg-[#6C25FF4B] text-center w-full py-2 rounded mb-8 font-medium"
      >
        Already Registered? Login
      </Link>
    </div>
  );
};

export default Home;
