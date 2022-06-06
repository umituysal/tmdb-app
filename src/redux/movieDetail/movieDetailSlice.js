import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail, fetchCastList } from "./services";

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    movieDetail: {},
    casts: [],
    movie: {
      status: "idle",
      error: null,
    },
    cast: {
      status: "idle",
      error: null,
    },
  },
  reducer: {},
  extraReducers: {
    [fetchMovieDetail.pending]: (state, action) => {
      state.movie.status = "loading";
    },
    [fetchMovieDetail.fulfilled]: (state, action) => {
      state.movieDetail = action.payload;
      console.log("detay", action.payload)
      state.movie.status = "succeeded";
    },
    [fetchMovieDetail.rejected]: (state, action) => {
      state.movie.status = "failed";
      state.movie.error= action.error.message;
    },
    [fetchCastList.pending]: (state, action) => {
      state.cast.status = "loading";
    },
    [fetchCastList.fulfilled]: (state, action) => {
      state.casts = [action.payload];
      state.cast.status  = "succeeded";
    },
    [fetchCastList.rejected]: (state, action) => {
      state.cast.status = "failed";
      state.cast.error  = action.error.message;
    },
  },
});
export default movieDetailSlice.reducer;
