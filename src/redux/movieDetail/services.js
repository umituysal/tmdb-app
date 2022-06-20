import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchMovieDetail = createAsyncThunk(
  "movie/getMovieDetail",
  async (id) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
export const fetchMovieCasts = createAsyncThunk(
  "movie/getMovieCastList",
  async (id) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT}/${id}${process.env.REACT_APP_API_CREDITS}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);

