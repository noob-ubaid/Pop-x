import React from 'react';
import { Link } from 'react-router';

const Button = ({text,bgColor,textColor,link}) => {
    return (
        <Link
        to={`/${link}`}
        className={`bg-${bgColor} text-center w-full mb-3 py-2 rounded text-${textColor} font-medium`}
      >
        {text}
      </Link>
    );
};

export default Button;