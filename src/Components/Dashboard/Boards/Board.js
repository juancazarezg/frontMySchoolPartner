import React from 'react';
import List from './List';

export default class Board extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="lists">
        <List title="Tareas" id={1} tipo="tarea"/>
        <List title="Proyectos" id={2} tipo="proyecto"/>
        <List title="Exámenes" id={1} index={this.props.index} tipo="examen"/>
        {console.log(this.props.index)}
      </div>
    );
  }
}
