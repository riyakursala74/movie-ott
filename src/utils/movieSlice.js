import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    trailer: null,
    popular_movies: [],
    top_rated: [],
    upcoming_movies: [],
  },
  reducers: {
    setMovieList: (state, action) => {
      state.movies = action.payload.results;
    },
    setMovieTrailer: (state, action) => {
      console.log("act= ", action.payload);
      state.trailer = action.payload;
    },
    setPopularMovieList: (state, action) => {
      state.popular_movies = action.payload.results;
    },
    setTopRatedMovieList: (state, action) => {
      state.top_rated = action.payload.results;
    },
    setUpcomingMovieList: (state, action) => {
      state.upcoming_movies = action.payload.results;
    },
  },
});

export default movieSlice.reducer;
export const {
  setMovieList,
  setMovieTrailer,
  setPopularMovieList,
  setTopRatedMovieList,
  setUpcomingMovieList,
} = movieSlice.actions;
