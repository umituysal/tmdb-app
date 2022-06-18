import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTvDetail = createAsyncThunk(
  "tv/getTvDetail",
  async (id) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT_TV}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
export const fetchCastList = createAsyncThunk(
  "tv/getTvCastList",
  async (id) => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT_TV}/${id}${process.env.REACT_APP_API_CREDITS}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);

