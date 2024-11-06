import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations.js";
import toast from "react-hot-toast";
const campersReducer = createSlice({
  name: "campers",
  initialState: {
    vehicle: [],
    filters: {},
    favorites: [],
    isLoading: false,
    error: null,
    total: 0,
  },
  reducers: {
    changeFilter(state, action) {
      state.filters = action.payload;
    },
    changeFavorites(state, action) {
      state.favorites = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.vehicle = [];
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.vehicle = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.total = 0;
        toast.error(action.payload);
      });
  },
});
export const { changeFilter, changeFavorites } = campersReducer.actions;
export default campersReducer.reducer;
