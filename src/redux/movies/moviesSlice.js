import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMoviesPopular,
  fetchMovieDiscover,
  fetchMovieDiscoverFilter,
} from "./services";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: {
      data: [],
      status: "idle",
      error: null,
      total_results: 0,
      total_pages: 0,
    },
  },
  reducer: {},
  extraReducers: {
    [fetchMoviesPopular.pending]: (state, action) => {
      state.movies.status = "loading";
    },
    [fetchMoviesPopular.fulfilled]: (state, action) => {
      state.movies.data = [action.payload.results];
      state.movies.total_results = action.payload.total_results;
      state.movies.total_pages = action.payload.total_pages;
      state.movies.status = "succeeded";
    },
    [fetchMoviesPopular.rejected]: (state, action) => {
      state.movies.status = "failed";
      state.movies.error = action.error.message;
    },
    [fetchMovieDiscover.pending]: (state, action) => {
      state.movies.status = "loading";
    },
    [fetchMovieDiscover.fulfilled]: (state, action) => {
      state.movies.data = [action.payload.results];
      state.movies.total_results = action.payload.total_results;
      state.movies.total_pages = action.payload.total_pages;
      state.movies.status = "succeeded";
    },
    [fetchMovieDiscover.rejected]: (state, action) => {
      state.movies.status = "failed";
      state.movies.error = action.error.message;
    },
    [fetchMovieDiscoverFilter.pending]: (state, action) => {
      state.movies.status = "loading";
    },
    [fetchMovieDiscoverFilter.fulfilled]: (state, action) => {
      state.movies.data = [action.payload.results];
      state.movies.total_results = action.payload.total_results;
      state.movies.total_pages = action.payload.total_pages;
      state.movies.status = "succeeded";
    },
    [fetchMovieDiscoverFilter.rejected]: (state, action) => {
      state.movies.status = "failed";
      state.movies.error = action.error.message;
    },
  },
});
export default moviesSlice.reducer;
