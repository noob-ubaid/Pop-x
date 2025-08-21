import React from "react";
import { Link } from "react-router";
import Button from "../shared/Button";

const Home = () => {
  return (
    <div className="flex h-full justify-end flex-col ">
      <h4 className="text-[#1D2226] text-[28px] font-bold">Welcome to PopX</h4>
      <p className="text-[#1D2226] opacity-60 mt-3 mb-6 text-lg">
        Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,
      </p>

      <div className="mb-8 flex flex-col">
        <Button
          text={`Create Account`}
          bgColor={`[#6C25FF]`}
          textColor={`white`}
          link={`register`}
        />
        <Button
          text={`Already Registered? Login`}
          bgColor={`[#6C25FF4B]`}
          textColor={`black`}
          link={`login`}
        />
      </div>
    </div>
  );
};

export default Home;
