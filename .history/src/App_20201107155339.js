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
  onSearchChange =(e)=> {
    e.preventDefault();
    this.state.robots.filter(robot=>{
        return robots.name.tolowerCase().oncludes()(this.state.searchfiled.)
    })
    console.log(e.target.value);
  }
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
