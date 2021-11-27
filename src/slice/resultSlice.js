import { createSlice } from "@reduxjs/toolkit";

export const resultSlice = createSlice({
  name: "calculator",
  initialState: {
    value: "0",
  },
  reducers: {
    setResult: (state, action) => {
      console.log("state value", state.value);

      if (state.value === "0") {
        if (action.payload == ".") {
          state.value = state.value + action.payload;
        } else {
          if (typeof action.payload === "number") {
            state.value = action.payload.toString();
          } else {
            state.value = action.payload;
          }
        }
      } else {
        console.log("else");
        if (state.value.length < 15) {
          state.value = state.value + action.payload;
        }
      }
      state.value = Number(state.value.replace(/\,/g, "")).toLocaleString();
    },
    del: (state) => {
      state.value = "0";
    },
  },
});

// Action creators are generated for each case reducer function
export const { setResult, del } = resultSlice.actions;

export default resultSlice.reducer;
