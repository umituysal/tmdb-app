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
export const fetchMovieDiscover = createAsyncThunk(
  "movies/getMovieDiscover",
  async () => {
    const res = await axios(
      `${process.env.REACT_APP_API_DISCOVER_MOVIE}?api_key=${process.env.REACT_APP_API_KEY}`
    );
    return res.data;
  }
);
export const fetchMovieDiscoverFilter = createAsyncThunk(
  "movies/getMovieDiscoverFilter",
  async (data) => {
    const {
      sort_by,
      include_adult,
      include_video,
      page,
      with_watch_monetization_types,
      with_release_type,
      release_date_gte,
      release_date_lte,
    } = data;
    const res = await axios(
      `${process.env.REACT_APP_API_DISCOVER_MOVIE}?api_key=${process.env.REACT_APP_API_KEY}&sort_by=${sort_by}&include_adult=${include_adult}&include_video=${include_video}&with_watch_monetization_types=${with_watch_monetization_types}&with_release_type=${with_release_type}&release_date.gte=${release_date_gte}&release_date.lte=${release_date_lte}&page=${page}`
    );
    return res.data;
  }
);
