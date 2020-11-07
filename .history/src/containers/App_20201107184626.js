import React, { Component } from "react";
import CardList from "../Components/CardList";
// import { robots } from "./robots";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
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
    const {robots,searchfiled}=this.state;
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(searchfiled.toLowerCase());
    });
    if (robots.length === 0) {
      return <h1>loading</h1>;
    } else {
      return (
        <div className='tc'>
          <h1>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />;
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
