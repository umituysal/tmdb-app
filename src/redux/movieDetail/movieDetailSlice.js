import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail, fetchCastList } from "./services";

export const movieDetailSlice = createSlice({
  name: "movieDetail",
  initialState: {
    item: {},
    casts: [],
    statusDetail: "idle",
    statusCast: "idle",
    errorDetail: null,
    errorCast: null,
  },
  reducer: {},
  extraReducers: {
    [fetchMovieDetail.pending]: (state, action) => {
      state.statusDetail = "loading";
    },
    [fetchMovieDetail.fulfilled]: (state, action) => {
      state.item = action.payload;
      state.statusDetail = "succeeded";
    },
    [fetchMovieDetail.rejected]: (state, action) => {
      state.statusDetail = "failed";
      state.errorDetail = action.error.message;
    },
    [fetchCastList.pending]: (state, action) => {
      state.statusCast = "loading";
    },
    [fetchCastList.fulfilled]: (state, action) => {
      state.casts = [action.payload];
      state.statusCast = "succeeded";
    },
    [fetchCastList.rejected]: (state, action) => {
      state.statusCast = "failed";
      state.errorCast = action.error.message;
    },
  },
});
export default movieDetailSlice.reducer;
