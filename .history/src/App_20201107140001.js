import React from "react";
import ReactDOM from "react-dom";
import CardList from "./CardList";
import { robots } from "./robots";
import { ReactDOM } from "react-dom";
const App = () => {
  return <CardList robots={robots} />;
};

export default App;
