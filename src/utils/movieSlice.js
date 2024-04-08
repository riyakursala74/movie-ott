import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: { movies: [] },
  reducers: {
    setMovieList: (state, action) => {
      console.log("payload= ", action);
      state.movies.push(action.payload.results);
    },
  },
});

export default movieSlice.reducer;
export const { setMovieList } = movieSlice.actions;
