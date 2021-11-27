import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

function Screen(props) {
  const result = useSelector((state) => state.result.value),
    dispatch = useDispatch(),
    theme = useSelector((state) => state.theme.value),
    mainClass = `h-24 flex flex-row-reverse items-center rounded-xl bg-blue-${theme}-screen mb-8`;

  return (
    <div className={mainClass}>
      <span id="screen-span" className="text-white text-3xl px-7 ">
        {result}
      </span>
    </div>
  );
}

export default Screen;
