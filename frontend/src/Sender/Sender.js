import React from "react";
import "./style.css";
import Cookie from "js-cookie";

export default class Sender extends React.Component {
  constructor() {
    super();
    this.send = this.send.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = { text: "" };
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    });
    console.log(this.state.text);
  }
  send() {
    const data = this.state.text;
    const mustSend = {
      title: "FROM FRONTEND",
      text: data
    };
    console.log(JSON.stringify(mustSend));
    if (data.length == 0) {
      mustSend.text = "EMPTY";
    }
    const url = "http://127.0.0.1:8000/add-post/";
    fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "X-CSRFToken": Cookie.get("csrftoken"),
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(mustSend)
    }).catch(err => console.log(err));
  }
  render() {
    console.log("--cookie-->", Cookie.get("csrftoken"));
    return (
      <div className="sender">
        <textarea className="sender__textarea" onChange={this.handleChange} />
        <a href="#" className="sender__btn" onClick={this.send}>
          send
        </a>
      </div>
    );
  }
}
