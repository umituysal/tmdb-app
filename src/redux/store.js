import { configureStore } from "@reduxjs/toolkit";
import movieDetailSlice from "./movieDetail/movieDetailSlice";
import moviesSlice from "./movies/moviesSlice";
import personDetailSlice from "./personDetail/personDetailSlice";
import searchSlice from "./search/searchSlice";
import tvSlice from "./tv/tvSlice";
import tvDetailSlice from "./tvDetail/tvDetailSlice";

export const store = configureStore({
  reducer: {
    search:searchSlice,
    tv: tvSlice,
    tvDetail:tvDetailSlice,
    movies: moviesSlice,
    movie: movieDetailSlice,
    person: personDetailSlice,
  },
});
