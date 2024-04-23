import React from "react";
import MovieCard from "./MovieCard";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
const scrollRight = () => {
  document.getElementById("content").scrollBy(100, 0);
};

const scrollLeft = () => {
  const content = document.getElementById("content");
  if (
    Math.abs(content.scrollLeft) ===
    content.scrollWidth - content.clientWidth
  ) {
  }
  content.scrollBy(-100, 0);
};
const MovieList = ({ movies, title }) => {
  return (
    <div className="md:pl-6 pl-2">
      <div className="text-white md:text-xl italic">{title}</div>
      <div className="flex">
        <div
          className="relative h-64 mt-6 w-8 left-0 hidden md:block"
          onClick={scrollLeft}
        >
          <FaCaretLeft className="text-white font-bold text-xl bg-gradient-to-b from:black items-center mt-24 " />
        </div>
        <div className="flex overflow-x-scroll py-3 overflow-y-hidden">
          {movies &&
            movies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })}
        </div>
        <div
          className="relative p-2 right-0 h-64 mt-6 w-8  hidden md:block"
          onClick={scrollRight}
        >
          <FaCaretRight className="text-white font-bold text-xl bg-gradient-to-b from:black items-center mt-24" />
        </div>
      </div>
    </div>
  );
};

export default MovieList;
