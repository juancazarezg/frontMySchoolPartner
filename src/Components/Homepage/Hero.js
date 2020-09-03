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
      email: ''
    };
  }

  handleEmail(val) {
    this.setState({
      email: val
    });
  }

  handleSubmit = async e => {
    await axios
      .post('http://localhost:3010/send-email')
      .then(function(response) {
        console.log(response);
        this.setState({
          email: ''
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

          <form onSubmit={this.handleSubmit}>
            <img src={actionLeft} alt="action-left" className="mr-3" />
            <label htmlFor="email" />
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
            <button className="form-button btn" type="submit">
              Crear cuenta gratis
            </button>
            <img src={actionRight} alt="action-left" className="ml-3" />
          </form>
        </div>

      </div>
    );
  }
}
