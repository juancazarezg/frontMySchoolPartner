import React from "react";
import { Link } from "react-router-dom"
import logo from "../../images/myschoollogo.png";
import "./Login.css";
import axios from 'axios';

class Login extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          password: '',
          email: ''
        };
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
          .get('64.227.87.110/api/user/searcher')
          .then(function(response) {
            console.log(response);
            this.setState({
              email: '',
              password: ''
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      };

      render() {
        return (
            <div className="container centered">
              <div className="wrapper fadeInDown">
                <div id="formContent">
                  <div className="fadeIn first">
                  </div>
                  <img src={logo} id="icon" alt="User Icon" />
                  <form>
                    <input type="text" id="login" className="fadeIn second" name="login" placeholder="email"  onChange={e => this.handleEmail(e.target.value)}/>
                    <input type="password" id="password" className="fadeIn third" name="login" placeholder="contraseña" onChange={e => this.handlePassword(e.target.value)}/>
                    <input type="submit" className="fadeIn fourth" value="Iniciar sesión"/>
                  </form>
                </div>
              </div>
            </div>
        )
      }
}

export default Login;