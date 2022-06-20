import { createSlice } from "@reduxjs/toolkit";
import { fetchPersonCasts, fetchPersonDetail } from "./services";
export const personDetailSlice = createSlice({
  name: "getPersonCasts",
  initialState: {
    person: {
      data: {},
      status: "idle",
      error: null,
      credits: {
        cast: [],
        status: "idle",
        error: null,
      }
    },
  },
  reducer: {},
  extraReducers: {
    [fetchPersonCasts.pending]: (state, action) => {
      state.person.credits.status = "loading";
    },
    [fetchPersonCasts.fulfilled]: (state, action) => {
      state.person.credits.cast = [action.payload.cast];
      state.person.credits.status = "succeeded";
    },
    [fetchPersonCasts.rejected]: (state, action) => {
      state.person.credits.status = "failed";
      state.person.credits.error = action.error.message;
    },
    [fetchPersonDetail.pending]: (state, action) => {
      state.person.status = "loading";
    },
    [fetchPersonDetail.fulfilled]: (state, action) => {
      state.person.data = action.payload;
      state.person.status = "succeeded";
    },
    [fetchPersonDetail.rejected]: (state, action) => {
      state.person.status = "failed";
      state.person.error = action.error.message;
    },
  },
});
export default personDetailSlice.reducer;
