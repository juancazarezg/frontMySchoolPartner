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
        <List title="Tareas" id={1} />
        <List title="Proyectos" id={2} />
        <List title="Examenes" id={3} />
      </div>
    );
  }
}
