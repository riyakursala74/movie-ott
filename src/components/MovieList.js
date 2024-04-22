import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="md:pl-6 pl-2">
      <div className="text-white md:text-xl italic">{title}</div>
      <div className="flex overflow-x-scroll py-3 overflow-y-hidden">
        {movies &&
          movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })}
      </div>
    </div>
  );
};

export default MovieList;
