import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [], trailer: null },
  reducers: {
    setMovieList: (state, action) => {
      state.movies = action.payload.results;
    },
    setMovieTrailer: (state, action) => {
      console.log("act= ", action.payload);
      state.trailer = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { setMovieList, setMovieTrailer } = movieSlice.actions;
