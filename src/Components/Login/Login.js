import React from "react";
import logo from "../../images/myschoollogo.png";
import { Link } from "react-router-dom"
import "./Login.css";
class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          user: {},
          email: ''
        };
      }

      render() {
        return (

            <div className="container">
                <div className="centered" style={{background:"#000000",color:"#ffffff"}}>
                    Login
                </div>
            </div>
        )
      }
}

export default Login;