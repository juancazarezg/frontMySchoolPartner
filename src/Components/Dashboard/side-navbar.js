import React from 'react';
import './side_navbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';

class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
    };
  }

  render() {
    $(document).ready(function() {
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });
    });
    return (
      <div className="funday-nav">
        <div className="wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
              <li className="active">
                <Link to="/dashboard">Recordatorios</Link>
              </li>

              <li>
                <Link to="/dashboard/calendar">Calendario</Link>
              </li>

              <li>
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                >
                  <i
                    className="fa fa-bars"
                    style={{
                      marginRight: '10px',
                      fontSize: '14px',
                      position: 'relative',
                      bottom: '2px'
                    }}
                  />
                  Materias
                </a>
              </li>
              <ul className="collapse list-unstyled" id="homeSubmenu">
                <li>
                  <Link to="/dashboard/boards">Pruebas de software</Link>
                </li>
                <li>
                  <Link to="/dashboard/boardstwo">Gráficas computacionales</Link>
                </li>
                <li>
                  <Link to="/dashboard/boardsthree">Progamación avanzada</Link>
                </li>
              </ul>
              <li style= {{display:"none"}}>
                <Link to="/dashboard/teams">Team</Link>
              </li>
            </ul>
          </nav>

          <div id="content">
            <button type="button" id="sidebarCollapse" className="navbar-btn">
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default navbar;
