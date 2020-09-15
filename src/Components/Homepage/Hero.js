import React, { Component } from 'react';
import car1 from '../../images/carousel-1.webp';
import car3 from '../../images/carousel-2.webp';
import car2 from '../../images/carousel-3.webp';
import actionLeft from '../../images/action-left.PNG';
import actionRight from '../../images/action-right.PNG';
import axios from 'axios';

export default class Hero extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      name: ''
    };
  }
  handleName(val) {
    this.setState({
      name: val
    });
  }

  handleEmail(val) {
    this.setState({
      email: val
    });
  }
  handlePassword(val) {
    this.setState({
      password: val
    });
  }

  handleSubmit = async e => {
    await axios
      .post('http://64.227.87.110/api/user')
      .then(function(response) {
        console.log(response);
        this.setState({
          email: '',
          name: '',
          password: ''
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container" id="product">
        <div className="hero-container">
          <h1 className="display-4"style={{textAlign:"center"}}>
            Una nueva forma de administrar tu <span>vida estudiantil</span>
          </h1>
          <p className="hero-p">
          Planear. Organizar. En un espacio colaborativo visual.
          </p>

          <form onSubmit={this.handleSubmit} className="col-lg-8">
            <label htmlFor="email" />
            <div className="text-center mb-3">
            <input
              id="name"
              name="name"
              value={this.state.email}
              className="form-input"
              type="text"
              placeholder="Ingresa tu nombre"
              onChange={e => this.handleName(e.target.value)}
              required
            />
              <input
              id="email"
              name="email"
              value={this.state.email}
              className="form-input"
              type="text"
              placeholder="Ingresa tu email"
              onChange={e => this.handleEmail(e.target.value)}
              required
            />
            <input
              id="password"
              name="password"
              value={this.state.password}
              className="form-input"
              type="password"
              placeholder="Contraseña"
              onChange={e => this.handlePassword(e.target.value)}
              required
            />
            </div>
            
            <div className="text-center"><button className="form-button btn" type="submit">
              Crear cuenta gratis
            </button></div>
            
          </form>
        </div>

      </div>
    );
  }
}
