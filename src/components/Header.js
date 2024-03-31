import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const userData = useSelector((store) => {
    console.log("store= ", store);
  });
  console.log("user= ", userData);
  return (
    <div className="flex justify-between">
      <div className=" text-3xl font-extrabold text-red-600 py-9 px-36 bg-gradient-to-b from-black">
        MOTT
      </div>
      <div className="bg-blue-900 text-white w-12 h-8 rounded-md p-1 mr-5 mt-2">
        Usr
      </div>
    </div>
  );
};

export default Header;
