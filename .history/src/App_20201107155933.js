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
  onSearchChange = e => {
    e.preventDefault();
    this.setState({searchfiled:e.target.value})
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfiled.toLowerCase());
    });
    console.log(filteredRobots);
  };
  render() {
    return (
      <div className='tc'>
        <h1>RobotFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={this.state.robots} />;
      </div>
    );
  }
}

export default App;
