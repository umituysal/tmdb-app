import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTvPopular
} from "./services";

export const tvSlice = createSlice({
  name: "tv",
  initialState: {
    tv: {
      data:[],
      status: "idle",
      error: null,
    },
  },
  reducer: {},
  extraReducers: {
    [fetchTvPopular.pending]: (state, action) => {
      state.tv.status = "loading";
    },
    [fetchTvPopular.fulfilled]: (state, action) => {
      state.tv.data = [action.payload.results];
      state.tv.status = "succeeded";
    },
    [fetchTvPopular.rejected]: (state, action) => {
      state.tv.status = "failed";
      state.tv.error = action.error.message;
    }
  },
});
export default tvSlice.reducer;
