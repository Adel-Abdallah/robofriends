import React,{Component} from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends React.Component  {
  return (
    <div className='tc'>
      <h1>RobotFriends</h1>
      <SearchBox />
      <CardList robots={robots} />;
    </div>
  );
};

export default App;
