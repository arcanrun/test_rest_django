import React, { Component } from "react";
import "./style.css";
import Sender from "../Sender/Sender";

export default class PostList extends Component {
  constructor() {
    super();
    this.state = { postsList: [] };
  }
  componentDidMount() {
    let url = "http://127.0.0.1:8000/posts/";
    fetch(url)
      .then(response => response.json())
      .then(res => {
        console.log("====", res);
        this.setState({
          postsList: res
        });
      })
      .catch(e => console.log(e));
  }
  render() {
    const { postsList } = this.state;
    console.log("---->", postsList);
    return (
      <div className="posts">
        <Sender />
        {postsList.map(item => {
          return (
            <div className="posts__card" key={item.id}>
              <h3 className="posts-card__title">{item.title}</h3>
              <p className="posts-card__text">{item.text}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
