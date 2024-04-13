import { useDispatch } from "react-redux";
import { setMovieList } from "./movieSlice";
import { useEffect } from "react";

const useMovieDetails = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const movies = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_API_ACCESS_TOKEN,
        },
      }
    );

    const movie_data = await movies.json();
    dispatch(setMovieList(movie_data));
  };
};

export default useMovieDetails;
