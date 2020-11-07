import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

const App = () => {
  return (
    <div className=>
      <h1>RobotFriends</h1>
      <SearchBox />
      <CardList robots={robots} />;
    </div>
  );
};

export default App;
