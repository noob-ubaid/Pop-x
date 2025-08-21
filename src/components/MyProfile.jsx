import React, { use } from "react";
import { AuthContext } from "../contexts/AuthCOntext";
import image from "/image.png";
import photo from "/photo.svg";
const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <div className="p-5 bg-white border-b border-gray-200">
        <p className="font-medium text-lg">Account Settings</p>
      </div>
      <div className="mt-8 p-5">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img className="size-[76px]" src={image} alt={user.displayName} />
            <img
              className="size-[22px] absolute top-13 -right-1"
              src={photo}
              alt={user.displayName}
            />
          </div>
          <div>
            <p className="text-[#1D2226] text-lg font-medium">
              {user.displayName}
            </p>
            <p className="text-[#1D2226] ">{user.email}</p>
          </div>
        </div>
      </div>
      <p className="text-[#1D2226] px-5 mt-2 pb-4 border-b border-dashed border-gray-400">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy
        Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>
    </div>
  );
};

export default MyProfile;
