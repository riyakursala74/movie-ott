import React, { useState } from "react";
import { IMAGE_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  const hovered = () => {
    setHover(!hover);
  };
  return (
    <div
      className="min-w-44 m-2 flex"
      onMouseEnter={hovered}
      onMouseLeave={hovered}
    >
      <img
        className="hover:absolute hover:w-72 hover:h-64 cursor-pointer"
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt="movie"
      />
      {hover && (
        <div className=" text-white z-50 min-w-72 h-24 relative opacity-85 py-2 bg-black px-5 pointer-events-none top-48">
          <h2>{movie.title}</h2>
          <h3>Release Date: {movie.release_date}</h3>
          <h3>Rating: {movie.vote_average}</h3>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
