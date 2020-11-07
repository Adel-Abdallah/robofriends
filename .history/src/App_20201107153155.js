import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";


const state ={
    robots
}
class App extends Component {
  render() {
    return (
      <div className='tc'>
        <h1>RobotFriends</h1>
        <SearchBox />
        <CardList robots={robots} />;
      </div>
    );
  }
}

export default App;
