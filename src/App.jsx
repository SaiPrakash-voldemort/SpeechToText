import "regenerator-runtime/runtime";
import React from "react";
import Heading from "./components/Heading";
import "./App.css";
import DisplayText from "./components/DisplayText";

const App = () => {
  return (
    <div className="">
      <div className="">
        <Heading />
        <DisplayText />
      </div>
    </div>
  );
};

export default App;
