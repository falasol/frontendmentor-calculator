import { createSlice } from "@reduxjs/toolkit";

export const operatorSlice = createSlice({
  name: "operator",
  initialState: {
    value: undefined,
  },
  reducers: {
    setOperator: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOperator } = operatorSlice.actions;

export default operatorSlice.reducer;
