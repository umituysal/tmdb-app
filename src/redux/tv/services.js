import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTvPopular = createAsyncThunk(
  "tv/getPopular",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_BASE_ENDPOINT_TV}/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
