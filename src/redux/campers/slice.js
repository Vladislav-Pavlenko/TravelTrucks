import { createSlice } from "@reduxjs/toolkit";
const campersReducer = createSlice({
  name: "campers",
  initialState: {
    vehicle: [],
    filters: { location: "", vehicleType: "", options: [] },
  },
});

export default campersReducer.reducer;
