import React, { useState } from "react";
import { IMAGE_URL } from "../utils/constant";
import MovieCardHover from "./MovieCardHover";

const MovieCard = ({ movie }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="md:min-w-48 min-w-32 m-2 flex"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <img
        className={!hover ? "block" : "md:hidden block"}
        src={`${IMAGE_URL}${movie.poster_path}`}
        alt="movie"
      />

      {hover && (
        <div className="relative h-0 w-0">
          <div className="absolute -top-14 bottom-2">
            <MovieCardHover
              releaseDate={movie.release_date}
              rating={movie.vote_average}
              image={`${IMAGE_URL}${movie.poster_path}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
