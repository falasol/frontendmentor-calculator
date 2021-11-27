import { createSlice } from "@reduxjs/toolkit";

export const tempSlice = createSlice({
  name: "temp",
  initialState: {
    value: undefined,
  },
  reducers: {
    setTemp: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTemp } = tempSlice.actions;

export default tempSlice.reducer;
