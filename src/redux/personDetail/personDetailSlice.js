import { createSlice } from "@reduxjs/toolkit";
import { fetchPersonCasts, fetchPersonDetail } from "./services";
export const personDetailSlice = createSlice({
  name: "getPersonCasts",
  initialState: {
    movieCredits: {},
    personDetail: {},
    cast: {
      status: "idle",
      error: null,
    },
    person: {
      status: "idle",
      error: null,
    },
  },
  reducer: {},
  extraReducers: {
    [fetchPersonCasts.pending]: (state, action) => {
      state.cast.status = "loading";
    },
    [fetchPersonCasts.fulfilled]: (state, action) => {
      state.movieCredits = action.payload;
      state.cast.status= "succeeded";
    },
    [fetchPersonCasts.rejected]: (state, action) => {
      state.cast.status = "failed";
      state.cast.error = action.error.message;
    },
    [fetchPersonDetail.pending]: (state, action) => {
      state.person.status = "loading";
    },
    [fetchPersonDetail.fulfilled]: (state, action) => {
      state.personDetail = action.payload;
      state.person.status = "succeeded";
    },
    [fetchPersonDetail.rejected]: (state, action) => {
      state.person.status = "failed";
      state.person.error = action.error.message;
    },
  },
});
export default personDetailSlice.reducer;
