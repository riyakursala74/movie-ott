import React from "react";
import { IMAGE_URL } from "../utils/constant";

const MovieCard = ({ movie }) => {
  return (
    <div className="min-w-44 m-2">
      <img
        className="hover:absolute hover:w-64 hover:h-80 cursor-pointer"
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt="movie"
      />
    </div>
  );
};

export default MovieCard;
