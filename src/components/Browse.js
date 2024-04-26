import React from "react";
import Header from "./Header";
import useMovieDetails from "../utils/useMovieDetails";
import MovieTrailer from "./MovieTrailer";
import MoviesContainer from "./MoviesContainer";
import usePopularMovies from "../utils/usePopularMovies";
import useTRMovies from "../utils/useTRMovies";
import useUpcomingMovies from "../utils/useUpcomingMovies";
import Footer from "./Footer";

const Browse = () => {
  useMovieDetails();
  usePopularMovies();
  useTRMovies();
  useUpcomingMovies();
  return (
    <div className="overflow-y-hidden no-scrollbar w-screen bg-black">
      <Header />
      <MovieTrailer />
      <MoviesContainer />
      <Footer />
    </div>
  );
};

export default Browse;
