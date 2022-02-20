import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: { search: "", selected: "" },
  reducers: {
    searchHandler(state, action) {
      state.search = action.payload;
    },
    selectHandler(state, action) {
      state.selected = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice;
