import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMoviesPopular = createAsyncThunk(
  "movies/getPopular",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
export const fetchMoviesSearch = createAsyncThunk(
  "movies/getSearch",
  async (search) => {
    if (search !== "") {
      const res = await axios(
         `${process.env.REACT_APP_API_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
      );
      return res.data;
    }
  }
);
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    items: [],
    search: [],
    statusPopular: "idle",
    statusSearch: "idle",
    errorPopular: null,
    errorSearch: null,
  },
  reducer: {},
  extraReducers: {
    [fetchMoviesPopular.pending]: (state, action) => {
      state.statusPopular = "loading";
    },
    [fetchMoviesPopular.fulfilled]: (state, action) => {
      state.items = [action.payload];
      state.statusPopular = "succeeded";
    },
    [fetchMoviesPopular.rejected]: (state, action) => {
      state.statusPopular = "failed";
      state.errorPopular = action.error.message;
    },
    [fetchMoviesSearch.pending]: (state, action) => {
      state.statusSearch = "loading";
    },
    [fetchMoviesSearch.fulfilled]: (state, action) => {
      state.search = [action.payload];
      state.statusSearch = "succeeded";
    },
    [fetchMoviesSearch.rejected]: (state, action) => {
      state.statusSearch = "failed";
      state.errorSearch = action.error.message;
    },
  },
});
export default moviesSlice.reducer;
