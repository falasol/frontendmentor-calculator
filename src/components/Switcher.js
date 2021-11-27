import React from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../slice/themeSlice";

function Switcher(props) {
  const dispatch = useDispatch();
  const switchTheme = (event) => {
    dispatch(setTheme(`theme${event.target.id}`));
  };
  return (
    <div className="flex justify-start flex-col">
      <div className="flex justify-end text-white">
        <div className="w-20 flex justify-around text-sm mb-1 mr-1">
          <span className="text-white">1</span>
          <span className="text-white">2</span>
          <span className="text-white">3</span>
        </div>
      </div>
      <div className="flex">
        <span className="text-white mr-5 text-sm mt-2">THEME</span>
        <div className="w-24 p-2 bg-blue-toggle rounded-full flex items-center justify-around">
          <div
            className="w-4 h-4 bg-red-toggle rounded-full cursor-pointer"
            id="1"
            onClick={switchTheme}
          ></div>
          <div
            className="w-4 h-4 bg-transparent cursor-pointer"
            id="2"
            onClick={switchTheme}
          ></div>
          <div
            className="w-4 h-4 bg-transparent rounded-full cursor-pointer"
            id="3"
            onClick={switchTheme}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Switcher;
