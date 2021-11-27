import { createSlice } from "@reduxjs/toolkit";

export const isrightAfterOperatorSlice = createSlice({
  name: "isRightAfterOperator",
  initialState: {
    value: false,
  },
  reducers: {
    setIsRightAfterOperator: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsRightAfterOperator } = isrightAfterOperatorSlice.actions;

export default isrightAfterOperatorSlice.reducer;
