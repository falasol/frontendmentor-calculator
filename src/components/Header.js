import React from "react";
import Title from "./Title";
import Switcher from "./Switcher";

function Header(props) {
  return (
    <div class="h-20 flex justify-between items-center mt-3 mb-5">
      <Title text="calc" />
      <Switcher />
    </div>
  );
}

export default Header;
