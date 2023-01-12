import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail, fetchMovieCasts } from "./services";

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    movie: {
      data: {},
      status: "idle",
      error: null,
      credits: {
        casts: [],
        status: "idle",
        error: null,
      },
    },
  },
  reducer: {},
  extraReducers: {
    [fetchMovieDetail.pending]: (state, action) => {
      state.movie.status = "loading";
    },
    [fetchMovieDetail.fulfilled]: (state, action) => {
      state.movie.data = action.payload;
      state.movie.status = "succeeded";
    },
    [fetchMovieDetail.rejected]: (state, action) => {
      state.movie.status = "failed";
      state.movie.error = action.error.message;
    },
    [fetchMovieCasts.pending]: (state, action) => {
      state.movie.credits.status = "loading";
    },
    [fetchMovieCasts.fulfilled]: (state, action) => {
      state.movie.credits.casts = [action.payload.cast];
      state.movie.credits.status = "succeeded";
    },
    [fetchMovieCasts.rejected]: (state, action) => {
      state.movie.credists.status = "failed";
      state.movie.credits.status = action.error.message;
    },
  },
});
export default movieDetailSlice.reducer;
