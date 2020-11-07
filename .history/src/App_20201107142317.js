import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import Search

const App = () => {
  return (
    <div>
      <h1>RobotFriends</h1>
      <SearchBox/>
      <CardList robots={robots} />;
    </div>
  );
};

export default App;
