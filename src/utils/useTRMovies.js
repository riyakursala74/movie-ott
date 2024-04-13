import { useDispatch } from "react-redux";
import { setTopRatedMovieList } from "./movieSlice";
import { useEffect } from "react";
import { TOP_RATED_MOVIE } from "./constant";

const useTRMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const movies = await fetch(`${TOP_RATED_MOVIE}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_ACCESS_TOKEN,
      },
    });

    const movie_data = await movies.json();
    dispatch(setTopRatedMovieList(movie_data));
  };
};

export default useTRMovies;
