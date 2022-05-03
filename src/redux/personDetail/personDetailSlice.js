import { createSlice } from "@reduxjs/toolkit";
import { fetchPersonCasts, fetchPersonDetail } from "./services";
export const personDetailSlice = createSlice({
  name: "getPersonCasts",
  initialState: {
    cast: {},
    personDetail:{},
    statusPerson: "idle",
    status:"idle",
    errorPerson: null,
    error:null
  },
  reducer: {},
  extraReducers: {
    [fetchPersonCasts.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchPersonCasts.fulfilled]: (state, action) => {
      state.cast = action.payload;
      state.status = "succeeded";
    },
    [fetchPersonCasts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
    [fetchPersonDetail.pending]: (state, action) => {
      state.statusPerson = "loading";
    },
    [fetchPersonDetail.fulfilled]: (state, action) => {
      state.personDetail = action.payload;
      state.statusPerson = "succeeded";
    },
    [fetchPersonDetail.rejected]: (state, action) => {
      state.statusPerson = "failed";
      state.errorPerson = action.error.message;
    },
  },
});
export default personDetailSlice.reducer;
