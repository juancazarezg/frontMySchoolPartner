import React from "react";
import logo from "../../images/myschoollogo.png";
import "./Header.css";
import { Link } from "react-router-dom";
//import funcs from "../../utilities/functions";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      email: ''
    };
  }
  componentDidMount() {
  }


  render() {
    return (
      <div className="header-nav">
        <nav className="navbar header-bar">
          <img className="header-logo" src={logo} alt="headerlogo" style={{width:"15vw", paddingLeft:"20px"}}/>
        </nav>
        <header className="top-header ">
          
          <div className="header-right float-right">
              <Link to="/dashboard/profile">
                <div className="row">
                <p>Perfil</p>
                <i className="fa fa-arrow-circle-down" style={{paddingBottom:"1vw", paddingLeft: "1vw"}}/></div>
              </Link>
          </div>
        </header>

        
      </div>
    );
  }
}

export default Header;
