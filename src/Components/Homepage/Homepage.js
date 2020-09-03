import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import logo from '../../images/myschoollogo.png';
import $ from 'jquery';
import { Link } from "react-router-dom";
import './Homepage.css';

// COMPONENTS
import Hero from './Hero';
import Product from './Product';
import GetToWork from './GetToWork';

export default class Homepage extends Component {
  login() {
    const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;

    //let url = `${encodeURIComponent(window.location.origin)}/auth/callback`;
    //window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`;
    window.location = 'http://localhost:3000/login';
  }

  render() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      //>=, not <=
      if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $('.navbar').addClass('nav-scroll');
      }
    }); //missing );
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-sm transparent">
          <div className="container">
            <div className="navbar-brand">
              <a href="/">
                <img width="215" src={logo} alt="logo" style={{paddingTop:"20px"}}/>
              </a>
            </div>

            <ul className="navbar-nav ml-auto">

              <li className="nav-item login-btn" /*onClick={this.login}*/ >
                <Link to="/login" >
                  <a className="nav-link">Log in</a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Hero />
      </div>
    );
  }
}
