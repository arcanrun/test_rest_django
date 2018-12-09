import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList/PostList";
// import Cookies from "js-cookie";
import cookie from "react-cookie";
class App extends Component {
  constructor() {
    super();
    this.state = {
      username: cookie.load("")
    };
  }

  render() {
    return <PostList />;
  }
}

export default App;
