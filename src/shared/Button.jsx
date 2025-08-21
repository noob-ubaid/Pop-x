import React from "react";
import { Link } from "react-router";

const Button = ({ text, bgColor, textColor, link }) => {
  return (
    <Link
      to={`/${link}`}
      className={`text-center w-full mb-3 py-2 rounded font-medium ${bgColor} ${textColor}`}
    >
      {text}
    </Link>
  );
};

export default Button;
