import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAllCampers",
  async (userParams = {}, thunkAPI) => {
    try {
      const params = { limit: 4, ...userParams };
      const response = await axios.get("campers/", { params });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`campers/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
