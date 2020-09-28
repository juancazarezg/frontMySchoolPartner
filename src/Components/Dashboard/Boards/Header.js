import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      txt: props.title,
    };
  }
  render() {
    return (
      <header
      ><h3
            className="inputTitle"
          >{this.state.txt}</h3>
      </header>
    );
  }
}
