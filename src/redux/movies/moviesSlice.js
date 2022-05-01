import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMoviesPopular = createAsyncThunk(
  "movies/getPopular",
  async (page) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    status: "idle",
    isLoading: false,
    error: null,
  },
  reducer: {},
  extraReducers: {
    [fetchMoviesPopular.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchMoviesPopular.fulfilled]: (state, action) => {
      state.items = [action.payload];
      state.status = "succeeded";
    },
    [fetchMoviesPopular.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export default moviesSlice.reducer;
