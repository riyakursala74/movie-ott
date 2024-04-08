import React, { useEffect } from "react";
import Header from "./Header";
import { UseDispatch, useDispatch } from "react-redux";
import { setMovieList } from "../utils/movieSlice";

const Browse = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  });

  const fetchMovieDetails = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.API_ACCESS_TOKEN,
        },
      }
    );

    const movie_data = await movies.json();
    console.log("movie data received=  ", movie_data);
    dispatch(setMovieList(movie_data));
  };
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
