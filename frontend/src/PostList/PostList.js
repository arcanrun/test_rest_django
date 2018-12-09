import React, { Component } from "react";
import "./style.css";
import Sender from "../Sender/Sender";
import Cookies from "js-cookie";

export default class PostList extends Component {
  constructor() {
    super();
    this.state = { postsList: [] };
  }
  componentDidMount() {
    let url = "http://localhost:8000/posts/";
    fetch(url)
      .then(response => response.json())
      .then(res => {
        this.setState({
          postsList: res
        });
      })
      .catch(e => console.log(e));
  }
  render() {
    const { postsList } = this.state;
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
