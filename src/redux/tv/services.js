import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchTvPopular = createAsyncThunk("tv/getPopular", async () => {
  const res = await axios(
    `${process.env.REACT_APP_API_BASE_ENDPOINT_TV}/popular?api_key=${process.env.REACT_APP_API_KEY}`
  );
  return res.data;
});
export const fetchTvDiscover = createAsyncThunk(
  "tv/getTvDiscover",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_DISCOVER_TV}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
export const fetchTvDiscoverFilter = createAsyncThunk(
  "tv/getTvDiscoverFilter",
  async (data) => {
    const {
      sort_by,
      page,
      with_watch_monetization_types,
      air_date_gte,
      air_date_lte,
      with_type,
    } = data;
    const res = await axios(
      `${process.env.REACT_APP_API_DISCOVER_TV}?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${sort_by}&with_watch_monetization_types=${with_watch_monetization_types}&air_date.gte=${air_date_gte}&air_date.lte=${air_date_lte}&with_type=${with_type}&page=${page}`
    );
    return res.data;
  }
);
