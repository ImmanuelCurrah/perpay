import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  let res = await axios.get("data.json");
  return res.data;
});

const initialState = {
  data: [],
};

let dataSlice = createSlice({
  name: "data",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default dataSlice.reducer;
