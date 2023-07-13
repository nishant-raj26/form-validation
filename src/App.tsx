import React from "react";
import "./App.css";
const Block = () => (
  <div style={{ width: "50px", height: "50px", border: "2px solid red" }} />
);
const App = () => {
  return (
    <div className="flex-container">
      <div className="item1">
        {" "}
        <Block />{" "}
      </div>
      <div className="item2">
        {" "}
        <Block />{" "}
      </div>
      <div className="item3">
        {" "}
        <Block />{" "}
      </div>
    </div>
  );
};

export default App;
