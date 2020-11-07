import React, { Component } from "react";
import CardList from "./CardList";
// import { robots } from "./robots";
import SearchBox from "./SearchBox";
import Scroll from './Scroll'
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
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
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
    if (this.state.robots.length === 0) {
      return <h1>loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          
          <CardList robots={filteredRobots} />;
        </div>
      );
    }
  }
}

export default App;
