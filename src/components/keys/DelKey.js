import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { del } from "../../slice/resultSlice";
import { flashScreen } from "../../util";

function DelKey(props) {
  const theme = useSelector((state) => state.theme.value);
  const mainClass = `h-16 w-16 bg-key-${theme}-func rounded flex items-center justify-center 
    shadow-${theme}-delKey cursor-pointer`;
  const dispatch = useDispatch();

  const keyClick = (event) => {
    flashScreen();
    dispatch(del());
    console.log(props.keyContent);
  };

  return (
    <div class={mainClass} onClick={keyClick}>
      <span class="flex text-white items-center text-xl mt-2">
        {props.keyContent}
      </span>
    </div>
  );
}

export default DelKey;
