import React, { Component } from 'react';
import './scss/Card.scss';

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registeredUsers: ["admin"],
      userName: "",
      heartIsClicked: false,
      isLoggedin: false
    }
  }

  //Getting the users from the local storage or setting an initial user
  componentDidMount() {
    var storedUsers = localStorage.getItem('users')
    if (storedUsers === null) {
      localStorage.setItem('users', JSON.stringify([...this.state.registeredUsers]));
    } else {
      this.setState({ registeredUsers: JSON.parse(storedUsers) });
    }
  }

  //The heart is clickable only once logged in.
  heartClickHandle = () => {
    if (this.state.isLoggedin) {
      this.setState({ heartIsClicked: !this.state.heartIsClicked });

    } else {
      alert('Please log in or register first');
    }
  }

  //Login - Checks if user has registered through the state array.
  loginClickHandle = () => {
    let input = prompt("Please enter your username to login", "");
    if (this.state.registeredUsers.some(user => user === input)) {
      this.setState({ isLoggedin: true });
      this.setState({ userName: input });
      alert(`Welcome to Kuflink ${input}! You are now logged in!`);
    } else {
      alert("Please register first");
    }
  }

  logoutClickHandle = () => {
    this.setState({ isLoggedin: false });
    alert(`It is sad to see you go ${this.state.userName}. You are now logged out`)
  }


  registerClickHandle = () => {
    let input = prompt("Please enter your username to register", "");
    //Checks if user has registered before.
    if (this.state.registeredUsers.some(user => user === input)) {
      this.setState({ userName: input });
      alert("You have already registered")
    } else {
      //Otherwise user is saved in localStorage and the state.
      localStorage.setItem('users', JSON.stringify([...this.state.registeredUsers, input]));
      this.setState({ registeredUsers: [...this.state.registeredUsers, input] });
      this.setState({ userName: input });
      alert(`You are now registered under ${input}. Please log in.`)
    }
  }

  //Sharing the page to twitter
  socialShare = () => {
    var currentTitle = document.title;
    var currentURL = document.URL;
    window.open(`https://twitter.com/share?url=${currentURL}&text=Check out my awesome${currentTitle} - `, "", "height=260,width=500,left=100,top=100,menubar=0");
    return false;
  }

  render() {
    return (
      <div className="card">
        <div className="card-container">
          <div className="card-thumbnail">
            <img src="https://picsum.photos/50" alt="thumbnail" />
          </div>
          <h1>
            Title goes here
          </h1>
          <h2>
            Secondary text
          </h2>
          <div className="card-image">
            <img src="https://picsum.photos/300/300" alt="main" />
          </div>
          <p className="card-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, eos?
          </p>
          <div className={`action login ${this.state.isLoggedin ? "active" : ""}`} onClick={this.loginClickHandle}>
            LOGIN
          </div>
          <div className={`action register ${this.state.userName ? "active" : ""}`} onClick={this.registerClickHandle}>
            REGISTER
          </div>
          <div className={`action logout ${this.state.isLoggedin ? "" : "active"}`} onClick={this.logoutClickHandle}>
            LOGOUT
          </div>
          <div className="icon-container heart">
            <FontAwesomeIcon className={`icon heart-icon ${this.state.heartIsClicked ? "active" : ""}`} onClick={this.heartClickHandle} icon={faHeart} />
          </div>
          <div className="icon-container share">
            <FontAwesomeIcon className="icon share-icon" icon={faShareAlt} onClick={this.socialShare} />
          </div>
        </div>
      </div>
    );
  }
}
export default Card;