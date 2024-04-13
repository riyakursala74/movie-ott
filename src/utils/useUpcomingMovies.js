import { useDispatch } from "react-redux";
import { setUpcomingMovieList } from "./movieSlice";
import { useEffect } from "react";
import { UPCOMING_MOVIE } from "./constant";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const movies = await fetch(`${UPCOMING_MOVIE}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.REACT_APP_API_ACCESS_TOKEN,
      },
    });

    const movie_data = await movies.json();
    dispatch(setUpcomingMovieList(movie_data));
  };
};

export default useUpcomingMovies;
