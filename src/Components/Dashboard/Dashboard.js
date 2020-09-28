import React, { Component } from 'react';
import Navbar from './side-navbar.js';
import Header from './Header.js';
import './Dashboard.css';
import Boards from './Boards/Boards';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      token: ''
    };
  }

  getToken(){
    console.log(sessionStorage.getItem('token'));
  }

  render() {
    return (
      <div className="bg-light">
        <Header />
        <Navbar />
        <Boards />
      </div>
    );
  }
}
