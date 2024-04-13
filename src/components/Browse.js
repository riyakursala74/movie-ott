import React from "react";
import Header from "./Header";
import useMovieDetails from "../utils/useMovieDetails";
import MovieTrailer from "./MovieTrailer";
import MoviesContainer from "./MoviesContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTRMovies from "../utils/useTRMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";

const Browse = () => {
  useMovieDetails();
  usePopularMovies();
  useTRMovies();
  useUpcomingMovies();
  return (
    <div className="overflow-y-hidden no-scrollbar">
      <Header />
      <MovieTrailer />
      <MoviesContainer />
    </div>
  );
};

export default Browse;
