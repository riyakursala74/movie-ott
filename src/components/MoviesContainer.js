import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MoviesContainer = () => {
  const now_movies = useSelector((store) => store.movie.movies);
  const popular_movies = useSelector((store) => store.movie.popular_movies);
  const top_rated = useSelector((store) => store.movie.top_rated);
  const upcoming = useSelector((store) => store.movie.upcoming_movies);
  return (
    <div className=" bg-black md:pl-3">
      <div className="md:-mt-44 relative z-40">
        <MovieList movies={now_movies} title="Now Playing" />
      </div>
      <MovieList movies={top_rated} title="Top Rated" />
      <MovieList movies={upcoming} title="Upcoming" />
      <MovieList movies={popular_movies} title="Popular" />
    </div>
  );
};

export default MoviesContainer;
