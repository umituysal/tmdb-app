import { createAsyncThunk } from "@reduxjs/toolkit";
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
export const fetchMoviesSearchPage = createAsyncThunk(
  "movies/getSearchPage",
  async (data) => {
    const { search, pageItem } = data;
    if (search !== "") {
      const res = await axios(
        `${process.env.REACT_APP_API_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${search}&page=${pageItem}`
      );
      return res.data;
    }
  }
);
