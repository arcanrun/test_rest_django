import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PostList from "./PostList/PostList";
import Cookie from "js-cookie";

class App extends Component {
  componentDidMount() {
    console.log("--cookie-->", Cookie.get());
  }
  render() {
    return <PostList />;
  }
}

export default App;
