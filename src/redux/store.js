import { configureStore } from "@reduxjs/toolkit";
import movieDetailSlice from "./movieDetail/movieDetailSlice";
import moviesSlice from "./movies/moviesSlice";
import personDetailSlice from "./personDetail/personDetailSlice";

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movie: movieDetailSlice,
    person: personDetailSlice,
  },
});
