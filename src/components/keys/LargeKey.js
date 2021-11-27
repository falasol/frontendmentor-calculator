import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setOperator } from "../../slice/operatorSlice";
import { setResult, del } from "../../slice/resultSlice";
import { setTemp } from "../../slice/tempSlice";
import { round10 } from "../../util";
import { flashScreen } from "../../util";

function LargeKey(props) {
  const operator = useSelector((state) => state.operator.value);
  const temp = useSelector((state) => state.temp.value);
  const result = useSelector((state) => state.result.value);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  const keyClick = (event) => {
    flashScreen();
    if (props.keyContent === "=") {
      let tempNum = Number(temp.replace(/\,/g, "")),
        resultNum = Number(result.replace(/\,/g, "")),
        calResult;

      switch (operator) {
        case "+":
          calResult = tempNum + resultNum;
          break;
        case "-":
          calResult = tempNum - resultNum;
          break;
        case "x":
          calResult = tempNum * resultNum;
          break;
        case "/":
          let dotPlacement = (tempNum / resultNum).toString().indexOf(".");
          calResult = round10(tempNum / resultNum, -14 + dotPlacement);
          break;
        default:
          break;
      }
      if (operator) {
        dispatch(setTemp(resultNum));
        dispatch(del());
        dispatch(setResult(calResult));
      }
    }
    if (props.keyContent === "RESET") {
      dispatch(setTemp(undefined));
      dispatch(del());
      dispatch(setOperator(undefined));
    }
    console.log(props.keyContent);
  };

  let keyClass = `h-16 w-largeKey cursor-pointer ${
    props.keyContent == "RESET"
      ? `bg-blue-${theme}-func shadow-${theme}-func`
      : `bg-red-${theme}-toggle shadow-${theme}-equal`
  } rounded flex items-center justify-center  `;

  let spanClass = `flex items-center text-3xl mt-2 ${
    props.keyContent == "RESET" ? "" : "text-white"
  }`;

  return (
    <div class={keyClass} onClick={keyClick}>
      <span class={spanClass}> {props.keyContent} </span>
    </div>
  );
}

export default LargeKey;
