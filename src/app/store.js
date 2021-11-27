import { configureStore } from "@reduxjs/toolkit";
import resultSlice from "../slice/resultSlice";
import operatorSlice from "../slice/operatorSlice";
import tempSlice from "../slice/tempSlice";
import isRightAfterOperatorSlice from "../slice/isRightAfterOperatorSlice";
import themeSlice from "../slice/themeSlice";

export default configureStore({
  reducer: {
    result: resultSlice,
    operator: operatorSlice,
    temp: tempSlice,
    isRightAfterOperator: isRightAfterOperatorSlice,
    theme: themeSlice,
  },
});
