import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTrend = createAsyncThunk(
  "trending/get-trending",
  async ({ timeWindow }) => {
    const res = await axios(
      `${process.env.REACT_APP_API_TRENDING}/${timeWindow}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
