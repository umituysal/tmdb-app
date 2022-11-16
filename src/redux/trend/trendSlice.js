import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTrend
} from "./services";

export const trendSlice = createSlice({
  name: "trending",
  initialState: {
    trending: {
      data: [],
      status: "idle",
      error: null,
    },
  },
  reducer: {},
  extraReducers: {
    [fetchTrend.pending]: (state, action) => {
      state.trending.status = "loading";
    },
    [fetchTrend.fulfilled]: (state, action) => {
      state.trending.data = [action.payload.results];
      state.trending.status = "succeeded";
    },
    [fetchTrend.rejected]: (state, action) => {
      state.trending.status = "failed";
      state.trending.error = action.error.message;
    }
  },
});
export default trendSlice.reducer;
