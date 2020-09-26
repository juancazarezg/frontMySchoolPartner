import React, { Component } from "react";
import "./Inbox.css";
import axios from "axios";
import Message from "./Message";
import Navbar from './../side-navbar';
import Header from './../Header';

export default class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      tareas: {
        pendientes: 0,
        enproceso: 12,
        realizadas: 4
      }
    };

    this.deleteMessage = this.deleteMessage.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
  }

  handleInput(val) {
    this.setState({
      message: val
    });
  }

  componentDidMount() {
    axios.get("/api/user-data").then(res => {
      console.log(res.data);
      this.setState({
        user: res.data
      });
    });

    axios.get("/api/messages").then(res => {
      console.log(res.data);
      this.setState({
        messages: res.data
      });
    });
  }

  addMessage() {
    var date = new Date();
    date =
      date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    const user_id = this.state.user.user_id;
    const { message } = this.state;
    axios.post("/api/messages", { user_id, message, date }).then(res => {
      console.log(res.data);
      this.setState({
        messages: res.data
      });
    });
  }

  deleteMessage(id) {
    console.log(id);
    axios.delete(`/api/messages/${id}`).then(res => {
      console.log(res.data);
      this.setState({
        messages: res.data
      });
    });
  }

  updateMessage(id, message) {
    axios.put(`/api/messages/${id}`, { message }).then(res => {
      this.setState({
        messages: res.data
      });
    });
  }

  render() {
    return (
      
      <div>
        <Header />
        <Navbar />
        <div id="inbox" className="container">
          <div className="row">
            <div className="col-md-8 mr-auto">
              <h1 className="">Reportes</h1>
              <div className="row"><p>Tareas pendientes por realizar:</p> {this.state.tareas.pendientes}</div>
              <div className="row"><p>Tareas en proceso:</p> {this.state.tareas.enproceso}</div>
              <div className="row"><p>Tareas realizadas:</p> {this.state.tareas.realizadas}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
