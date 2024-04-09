import React from "react";
import Header from "./Header";
import useMovieDetails from "../utils/useMovieDetails";
import MovieTrailer from "./MovieTrailer";
import MoviesContainer from "./MoviesContainer";

const Browse = () => {
  useMovieDetails();
  return (
    <div className="overflow-hidden">
      <Header />
      <MovieTrailer />
      <MoviesContainer />
    </div>
  );
};

export default Browse;
