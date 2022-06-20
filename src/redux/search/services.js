import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSearch = createAsyncThunk(
  "multi/getSearch",
  async (search) => {
    if (search !== "") {
      const res = await axios(
        `${process.env.REACT_APP_API_SEARCH}?api_key=${process.env.REACT_APP_API_KEY}&query=${search}`
      );
      return res.data;
    }
  }
);
export const fetchSearchPage = createAsyncThunk(
  "multi/getSearchPage",
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