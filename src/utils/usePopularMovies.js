import { useDispatch } from "react-redux";
import { setPopularMovieList } from "./movieSlice";
import { useEffect } from "react";
import { POPULAR_MOVIE_URL } from "./constant";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const movies = await fetch(`${POPULAR_MOVIE_URL}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_ACCESS_TOKEN,
      },
    });

    const movie_data = await movies.json();
    console.log("movie= ", movie_data);
    dispatch(setPopularMovieList(movie_data));
  };
};

export default usePopularMovies;
