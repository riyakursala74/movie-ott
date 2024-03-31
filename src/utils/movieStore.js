import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";

const movieStore = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default movieStore;
