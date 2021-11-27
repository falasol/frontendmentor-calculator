import React from "react";
import { setResult, del } from "../../slice/resultSlice";
import { setOperator } from "../../slice/operatorSlice";
import { useDispatch, useSelector } from "react-redux";
import { setIsRightAfterOperator } from "../../slice/isRightAfterOperatorSlice";
import { setTemp } from "../../slice/tempSlice";
import { flashScreen } from "../../util";

function RegularKey(props) {
  const operator = useSelector((state) => state.operator.value);
  const isRightAfterOperator = useSelector(
    (state) => state.isRightAfterOperator.value
  );
  const result = useSelector((state) => state.result.value);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const mainClass = `h-16 w-16 bg-key-${theme}-background rounded flex items-center justify-center shadow-${theme}-key cursor-pointer`;

  const keyClick = (event) => {
    flashScreen();
    if (["+", "-", "x", "/"].indexOf(props.keyContent) == -1) {
      if (isRightAfterOperator) {
        dispatch(del());
      }
      if (props.keyContent == ".") {
        if (result.indexOf(".") == -1) {
          dispatch(setResult(props.keyContent));
          dispatch(setIsRightAfterOperator(false));
        }
      } else {
        dispatch(setResult(props.keyContent));
        dispatch(setIsRightAfterOperator(false));
      }
    } else {
      console.log(result);
      dispatch(setTemp(result));
      dispatch(setOperator(props.keyContent));
      dispatch(setIsRightAfterOperator(true));
    }
  };

  return (
    <div class={mainClass} onClick={keyClick}>
      <span class="flex items-center text-3xl mt-2"> {props.keyContent} </span>
    </div>
  );
}

export default RegularKey;
