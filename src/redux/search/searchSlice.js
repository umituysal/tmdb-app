import { createSlice } from "@reduxjs/toolkit";
import {
    fetchSearch,
    fetchSearchPage,
} from "./services";

export const searchSlice = createSlice({
    name: "search",
    initialState: {
        search: {
            data: [],
            status: "idle",
            error: null,
            total_results: 0,
            total_pages: 0,
        },
    },
    reducer: {},
    extraReducers: {
        [fetchSearch.pending]: (state, action) => {
            state.search.status = "loading";
        },
        [fetchSearch.fulfilled]: (state, action) => {
            state.search.data = [action.payload.results];
            state.search.total_results = action.payload.total_results;
            state.search.total_pages = action.payload.total_pages;
            state.search.status = "succeeded";
        },
        [fetchSearch.rejected]: (state, action) => {
            state.search.status = "failed";
            state.search.error = action.error.message;
        },
        [fetchSearchPage.pending]: (state, action) => {
            state.search.status = "loading";
        },
        [fetchSearchPage.fulfilled]: (state, action) => {
            state.search.data = [action.payload.results];
            state.search.total_results = action.payload.total_results;
            state.search.total_pages = action.payload.total_pages;
            state.search.status = "succeeded";
        },
        [fetchSearchPage.rejected]: (state, action) => {
            state.search.status = "failed";
            state.search.error = action.error.message;
        }
    },
});
export default searchSlice.reducer;
