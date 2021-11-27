import logo from "./logo.svg";
import "./App.css";
import Keyboard from "./components/Keyboard";
import Header from "./components/Header";
import Screen from "./components/Screen";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const [result, setResult] = useState(0),
    theme = useSelector((state) => state.theme.value),
    mainClass = `bg-blue-${theme}-main h-screen px-6 overflow-auto`;

  return (
    <main class={mainClass}>
      <Header />
      <Screen result={result} />
      <Keyboard />
    </main>
  );
}

export default App;
