import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfiled: "",
    };
  }
  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=>{
          response.json();
      })
      .then(user=>{
          this.setState
      })
    this.setState({ robots: robots });
  }
  onSearchChange = e => {
    e.preventDefault();
    this.setState({ searchfiled: e.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfiled.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />;
      </div>
    );
  }
}

export default App;
