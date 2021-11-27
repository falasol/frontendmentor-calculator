import React from "react";
import RegularKey from "./keys/RegularKey";
import keyItems from "../keyItems";
import DelKey from "./keys/DelKey";
import LargeKey from "./keys/LargeKey";
import { useSelector } from "react-redux";

function Keyboard(props) {
  const theme = useSelector((state) => state.theme.value);
  let keys = [],
    KeyboardClass = `h-keyboard m-auto rounded-xl bg-blue-${theme}-toggle p-7 flex flex-wrap justify-between items-center`;

  for (let key in keyItems) {
    if (keyItems[key].key === "DEL") {
      keys.push(<DelKey keyContent={keyItems[key].key} />);
      continue;
    }
    if (keyItems[key].key === "RESET" || keyItems[key].key === "=") {
      keys.push(<LargeKey keyContent={keyItems[key].key} />);
      continue;
    }
    keys.push(<RegularKey keyContent={keyItems[key].key} />);
  }

  return <div className={KeyboardClass}>{keys}</div>;
}
export default Keyboard;
