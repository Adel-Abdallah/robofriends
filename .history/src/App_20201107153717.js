import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfiled: "",
    };
  }
  onSearchChange(event)
  render() {
    return (
      <div className='tc'>
        <h1>RobotFriends</h1>
        <SearchBox />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}

export default App;
