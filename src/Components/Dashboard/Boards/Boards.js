import React, { Component } from 'react';
import Board from './Board';
import Header from '../Header';
import Navbar from '../side-navbar';
import './Boards.css';

export default class Boards extends Component {

  componentDidMount(){
  }

  render() {
    return (
      <div>
        <Header />
        <Navbar />

        <div className="boards-container">
          <Board index={this.props.index}/>
        </div>
      </div>
    );
  }
}
