import React from 'react';
import './side_navbar.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import dragula from 'dragula';

class navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      addingItem: false,
      cardOpen: false,
      item: '',
      description: '',
      newItem: '',
      clicked: '',
      items: []
    };
    this.update = this.update.bind(this);
  }

  componentDidMount(){
    this.getSubjects();
  }

  async getSubjects(){
    try{
      let result = await fetch('http://64.227.87.110/api/subject/getAll',{
        method: 'GET', headers: {'Content-type' : 'application/json','Authorization': 'Bearer '+sessionStorage.getItem('token')
        }
      })
      .then(token => token.json())
      .then(item => this.setState({
        items: item.response.results
      }) 
      );
     
    }catch(e){
      console.log(e)
    }
  }

  update(e) {
    if (this.state.newItem !== undefined && this.state.newItem !== ' ') {
      var arrayvar = this.state.items.slice();
      arrayvar.push({ id: arrayvar.length, name: '' + this.state.newItem });
      this.setState({ items: arrayvar });
      this.txtarea.value = '';

      try{
        let result = fetch('http://64.227.87.110/api/subject',{
          method: 'POST', headers: {'Content-type' : 'application/json','Authorization': 'Bearer '+sessionStorage.getItem('token')
          }, body: JSON.stringify({name: this.state.newItem})
        });
      
      }catch(e){
        console.log(e)
      }
    }
  }

  addCard(e) {
    console.log('add Subject in list' + this.props.id);
    this.setState({ addingItem: true });
    this.setState({ newItem: e.target.value });
  }

  closeCard() {
    this.setState({ addingItem: false });
    this.setState({ cardOpen: false });
  }

  updateDescription(e) {
    this.setState({ description: e.target.value });
  }

  saveDescription(e) {
    this.setState({ cardOpen: false });
    console.log('Description: ' + this.state.description);
  }

  render() {
    $(document).ready(function() {
      $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
      });
    });

    var d = dragula({
      moves: function(el, cont, handle) {
        return handle.className !== 'title';
      }
    });
    var cs = document.querySelectorAll('.listI');
    for (var i in cs) {
      d.containers.push(cs[i]);
    }
    let items = this.state.items;

    return (
      <div className="funday-nav">
        <div className="wrapper">
          <nav id="sidebar">
            <ul className="list-unstyled components">
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
                  {items.map(item => (
                    <li
                      ids={'target-' + item.ids}
                      key={item.ids}
                      className="item"
                      item={item}
                    >
                      <Link to="/dashboard/boards" onClick={sessionStorage.setItem('subject',item.name)}>{item.name}</Link>
                      {console.log(sessionStorage.getItem('subject'))}
                    </li>
                  ))}
                <li>
                  {this.state.addingItem ? (
                    <div className="newItem">
                      <textarea
                        autoFocus
                        onChange={this.addCard.bind(this)}
                        ref={el => (this.txtarea = el)}
                      />
                      <button className="addBtn" onClick={this.update.bind(this)}>
                        Añadir
                      </button>
                      <button className="closeBtn" onClick={this.closeCard.bind(this)}>
                        x
                      </button>
                    </div>
                    ) : (
                      <a className="addCard" onClick={this.addCard.bind(this)}>
                        Añadir materia...
                      </a>
                    )
                  }
                </li>
              </ul>
              <li>
                <Link to="/dashboard/calendar">Calendario</Link>
              </li>
              <li>
                <Link to="/dashboard/reports">Reportes</Link>
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
