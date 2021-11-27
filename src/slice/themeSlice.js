import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "temp",
  initialState: {
    value: "theme1",
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
