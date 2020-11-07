import React from "react";

import CardList from "./CardList";
import { robots } from "./robots";
import { ReactDOM } from "react-dom";
const App = () => {
  return
  <>
  <h1>RobotFr</h1>
    <CardList robots={robots} />;
  </>
      
};

export default App; 
