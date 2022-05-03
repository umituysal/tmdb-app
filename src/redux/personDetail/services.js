import {createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchPersonCasts = createAsyncThunk(
    "person/getPersonCasts",
    async (id) => {
      const res = await axios(
        `${process.env.REACT_APP_API_PERSON}/${id}/movie_credits?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return res.data;
    }
  );
  export const fetchPersonDetail = createAsyncThunk(
    "person/getPersonDetail",
    async (id) => {
      const res = await axios(
        `${process.env.REACT_APP_API_PERSON}/${id}?api_key=${process.env.REACT_APP_API_KEY}`
      );
      return res.data;
    }
  );