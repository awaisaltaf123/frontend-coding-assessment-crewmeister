import { createSlice } from "@reduxjs/toolkit";
import { fetchAbsences } from "../actions/absences";

const initialState = {
  isFetching: false,
  isError: false,
  error: "",
  data: [],
};

const absencesSlice = createSlice({
  name: "absences",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbsences.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchAbsences.fulfilled, (state, action) => {
        state.isFetching = false;
        state.isError = false;
        state.error = "";
        state.data = action.payload;
      })
      .addCase(fetchAbsences.rejected, (state, action) => {
        state.isFetching = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default absencesSlice.reducer;
