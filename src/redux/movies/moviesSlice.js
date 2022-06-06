import { createSlice } from "@reduxjs/toolkit";
import {
  fetchMoviesPopular,
  fetchMoviesSearch,
  fetchMoviesSearchPage,
} from "./services";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    searchMovies: [],
    totalResults: 0,
    totalPage: 0,
    popular: {
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
      state.popular.status = "loading";
    },
    [fetchMoviesPopular.fulfilled]: (state, action) => {
      state.movies = [action.payload.results];
      state.popular.status = "succeeded";
    },
    [fetchMoviesPopular.rejected]: (state, action) => {
      state.popular.status = "failed";
      state.popular.error = action.error.message;
    },
    [fetchMoviesSearch.pending]: (state, action) => {
      state.searching.status = "loading";
    },
    [fetchMoviesSearch.fulfilled]: (state, action) => {
      state.searchMovies = [action.payload.results];
      state.totalResults = action.payload.total_results;
      state.totalPage = action.payload.total_pages;
      state.searching.status = "succeeded";
    },
    [fetchMoviesSearch.rejected]: (state, action) => {
      state.searching.status = "failed";
      state.searching.error = action.error.message;
    },
    [fetchMoviesSearchPage.pending]: (state, action) => {
      state.searching.status = "loading";
    },
    [fetchMoviesSearchPage.fulfilled]: (state, action) => {
      state.searchMovies = [action.payload.results];
      state.totalResults = action.payload.total_results;
      state.totalPage = action.payload.total_pages;
      state.searching.status = "succeeded";
    },
    [fetchMoviesSearchPage.rejected]: (state, action) => {
      state.searching.status = "failed";
      state.searching.error = action.error.message;
    },
  },
});
export default moviesSlice.reducer;
