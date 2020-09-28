import React, { Component } from "react";
import "./Inbox.css";
import Navbar from './../side-navbar';
import Header from './../Header';

export default class Inbox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      tareas: {
        pendientes: 1,
        enproceso: 12,
        realizadas: 4
      }
    };
  }

  handleInput(val) {
    this.setState({
      message: val
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
              <div className="row"><p>Proyectos pendientes por realizar:</p> 0</div>
              <div className="row"><p>Exámenes pendientes por realizar:</p> 1</div>
              <div className="row"><p>Horas trabajadas:</p> 2</div>
              <div className="row"><p>Actividades en proceso:</p> 0</div>
              <div className="row"><p>Actividades realizadas:</p> 0</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
