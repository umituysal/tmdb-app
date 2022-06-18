import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMoviesPopular,
} from "./services";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    searchMovies: [],
    totalResults: 0,
    totalPage: 0,
    movies: {
      data:[],
      status: "idle",
      error: null,
    },
    searching: {
      status: "idle",
      error: null,
    },
  },
  reducer: {},
  extraReducers: {
    [fetchMoviesPopular.pending]: (state, action) => {
      state.movies.status = "loading";
    },
    [fetchMoviesPopular.fulfilled]: (state, action) => {
      state.movies.data = [action.payload.results];
      state.movies.status = "succeeded";
    },
    [fetchMoviesPopular.rejected]: (state, action) => {
      state.movies.status = "failed";
      state.movies.error = action.error.message;
    }
  },
});
export default moviesSlice.reducer;
