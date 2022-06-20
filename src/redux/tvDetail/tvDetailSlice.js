import { createSlice } from "@reduxjs/toolkit";
import { fetchTvDetail, fetchTvCasts } from "./services";

export const tvDetailSlice = createSlice({
  name: "tvDetail",
  initialState: {
    tv: {
      data: {},
      status: "idle",
      error: null,
      credits: {
        casts: [],
        status: "idle",
        error: null
      },
    },
  },
  reducer: {},
  extraReducers: {
    [fetchTvDetail.pending]: (state, action) => {
      state.tv.status = "loading";
    },
    [fetchTvDetail.fulfilled]: (state, action) => {
      state.tv.data = action.payload;
      state.tv.status = "succeeded";
    },
    [fetchTvDetail.rejected]: (state, action) => {
      state.tv.status = "failed";
      state.tv.error = action.error.message;
    },
    [fetchTvCasts.pending]: (state, action) => {
      state.tv.credits.status = "loading";
    },
    [fetchTvCasts.fulfilled]: (state, action) => {
      state.tv.credits.casts = [action.payload.cast];
      state.tv.credits.status = "succeeded";
    },
    [fetchTvCasts.rejected]: (state, action) => {
      state.tv.credits.status = "failed";
      state.tv.credits.error = action.error.message;
    }

  },
});
export default tvDetailSlice.reducer;
