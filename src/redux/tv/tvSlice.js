import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTvPopular,
  fetchTvDiscover,
  fetchTvDiscoverFilter,
} from "./services";

export const tvSlice = createSlice({
  name: "tv",
  initialState: {
    tv: {
      data: [],
      status: "idle",
      error: null,
      total_results: 0,
      total_pages: 0,
    },
  },
  reducer: {},
  extraReducers: {
    [fetchTvPopular.pending]: (state, action) => {
      state.tv.status = "loading";
    },
    [fetchTvPopular.fulfilled]: (state, action) => {
      state.tv.data = [action.payload.results];
      state.tv.total_results = action.payload.total_results;
      state.tv.total_pages = action.payload.total_pages;
      state.tv.status = "succeeded";
    },
    [fetchTvPopular.rejected]: (state, action) => {
      state.tv.status = "failed";
      state.tv.error = action.error.message;
    },
    [fetchTvDiscover.pending]: (state, action) => {
      state.tv.status = "loading";
    },
    [fetchTvDiscover.fulfilled]: (state, action) => {
      state.tv.data = [action.payload.results];
      state.tv.total_results = action.payload.total_results;
      state.tv.total_pages = action.payload.total_pages;
      state.tv.status = "succeeded";
    },
    [fetchTvDiscover.rejected]: (state, action) => {
      state.tv.status = "failed";
      state.tv.error = action.error.message;
    },
    [fetchTvDiscoverFilter.pending]: (state, action) => {
      state.tv.status = "loading";
    },
    [fetchTvDiscoverFilter.fulfilled]: (state, action) => {
      state.tv.data = [action.payload.results];
      state.tv.total_results = action.payload.total_results;
      state.tv.total_pages = action.payload.total_pages;
      state.tv.status = "succeeded";
    },
    [fetchTvDiscoverFilter.rejected]: (state, action) => {
      state.tv.status = "failed";
      state.tv.error = action.error.message;
    },
  },
});
export default tvSlice.reducer;
