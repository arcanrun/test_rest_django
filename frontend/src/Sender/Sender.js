import React from "react";
import "./style.css";
import Cookies from "js-cookie";

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
    const csrftoken = Cookies.get("protection");
    console.log("----", csrftoken);
    const data = this.state.text;
    const mustSend = {
      title: "FROM FRONTEND",
      text: data
    };
    const sendData = JSON.stringify(mustSend);
    console.log(sendData);
    if (data.length == 0) {
      mustSend.text = "EMPTY";
    }
    const url = "http://localhost:8000/add-post/";
    fetch(url, {
      /* 
      Чтобы браузеры могли 
      отправлять запрос 
      с учётными данными,
       добавьте credentials: 'include' в объект init,
        передаваемый вами в метод fetch():
        */

      method: "POST",
      credentials: "include",
      // mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken
      },
      body: sendData
    }).catch(err => console.log(err));
  }
  render() {
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
