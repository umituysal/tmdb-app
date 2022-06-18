import { createSlice } from "@reduxjs/toolkit";
import { fetchTvDetail, fetchCastList } from "./services";

export const tvDetailSlice = createSlice({
  name: "tvDetail",
  initialState: {
    tv: {
      detail: {},
      credits: [],
      status: "idle",
      error: null
    },
  },
  reducer: {},
  extraReducers: {
    [fetchTvDetail.pending]: (state, action) => {
      state.tv.status = "loading";
    },
    [fetchTvDetail.fulfilled]: (state, action) => {
      state.tv.detail = action.payload;
      state.tv.status = "succeeded";
    },
    [fetchTvDetail.rejected]: (state, action) => {
      state.tv.status = "failed";
      state.tv.error = action.error.message;
    },
    [fetchCastList.pending]: (state, action) => {
      state.tv.status = "loading";
    },
    [fetchCastList.fulfilled]: (state, action) => {
      state.tv.credits =[action.payload];
      state.tv.status = "succeeded";
    },
    [fetchCastList.rejected]: (state, action) => {
      state.tv.status = "failed";
      state.tv.error = action.error.message;
    }

  },
});
export default tvDetailSlice.reducer;
