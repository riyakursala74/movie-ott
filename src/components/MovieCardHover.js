import React from "react";
import { FaCaretRight } from "react-icons/fa";

const MovieCardHover = ({ image, rating, releaseDate }) => {
  return (
    <div className=" bg-gray-700 z-999 text-white rounded-lg w-80 border-separate">
      <div className="flex flex-col rounded-md">
        <div>
          <img src={image} alt="" className="h-64 w-80" />
        </div>
        <div>
          <button className="bg-white rounded-full ml-5 mt-3">
            <FaCaretRight className="text-4xl text-black pl-1" />
          </button>
        </div>
        <div className="pl-4 italic">Rating: {Math.round(rating)}/10</div>
        <div className="pl-4 italic pb-2">Release Date: {releaseDate}</div>
      </div>
    </div>
  );
};

export default MovieCardHover;
