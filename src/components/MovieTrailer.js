import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMovieTrailer } from "../utils/movieSlice";
import { headers } from "../utils/config";

const MovieTrailer = () => {
  const dispatch = useDispatch();
  let current_movie;
  const movies = useSelector((store) => {
    return store.movie.movies;
  });
  current_movie = movies[0];
  const fetchMovie = async (id) => {
    const movie_videos = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      { headers }
    );
    const json = await movie_videos.json();
    const movie_trailer = json.results.filter((m) => m.type === "Trailer");
    const trailer = movie_trailer?.length > 0 ? movie_trailer[0] : json[0];
    dispatch(setMovieTrailer(trailer));
  };

  const trailer = useSelector((store) => store.movie.trailer);

  useEffect(() => {
    if (movies.length > 0) {
      fetchMovie(current_movie.id);
    }
  }, [movies]);

  return (
    <div className="overflow-hidden no-scrollbar">
      <div className="absolute md:pt-48 pt-32 h-64 md:h-auto md:px-20 px-4 bg-gradient-to-r from-black aspect-video overflow-hidden">
        <h2 className="text-white md:text-4xl font-bold">
          {current_movie?.title}
        </h2>
        <p className="text-white w-1/2 mt-7 hidden md:block">
          {current_movie?.overview}
        </p>
        <button className="bg-white px-1 md:px-9 md:py-2 py-1 mt-3 mr-5 text-black rounded-sm text-bold hover:font-bold hover:opacity-85">
          Play
        </button>
        <button className="bg-gray-500 px-1 hidden md:block md:px-9 md:py-2 py-1 mt-3 text-white rounded-sm text-bold hover:font-bold hover:opacity-85">
          Info
        </button>
      </div>
      <div className="">
        <iframe
          className="w-screen aspect-video overflow-hidden"
          frameBorder="0"
          src={
            "https://www.youtube.com/embed/" +
            trailer?.key +
            "?autoplay=1&mute=1&enablejsapi=1?si=4Pchve3YzXRy8t4y&amp;controls=0"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MovieTrailer;
