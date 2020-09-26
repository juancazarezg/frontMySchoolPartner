import React from 'react';
import dragula from 'dragula';

export default class Items extends React.Component {
  constructor(props) {
    super();
    this.state = {
      addingItem: false,
      cardOpen: false,
      item: '',
      name: '',
      date:'',
      description: '',
      newItem: '',
      newItemName: '',
      newItemDate: '',
      clicked: '',
      items: []
    };
    this.update = this.update.bind(this);
  }

  update(e) {
    if (this.state.newItem !== undefined && this.state.newItem !== ' ') {
      var arrayvar = this.state.items.slice();
      arrayvar.push({ id: arrayvar.length, content: '' + this.state.newItem, name: '' + this.state.newItemName, date: ''+this.state.newItemDate });
      this.setState({ items: arrayvar });
      this.txtarea.value = '';
      this.closeCard(e);
    }
  }
  componentDidMount(){
    //this.getTasks();
  }

  async getTasks(){
    try{
      let result = await fetch('http://64.227.87.110/api/task/searcher?archived=0&subject_id='+sessionStorage.getItem('subject')+'&type=examen',{
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

  addCard(e) {
    console.log('add Card in list' + this.props.id);
    this.setState({ addingItem: true });
    this.setState({ newItem: e.target.value });
  }
  addCardName(e) {
    console.log('add Card in list' + this.props.id);
    this.setState({ addingItem: true });
    this.setState({ newItemName: e.target.value });
  }
  addCardDate(e) {
    console.log('add Card in list' + this.props.id);
    this.setState({ addingItem: true });
    this.setState({ newItemDate: e.target.value });
  }

  closeCard() {
    this.setState({ addingItem: false });
    this.setState({ cardOpen: false });
  }

  seeCard(e) {
    console.log('Seeing card id:' + e.target.id);
    this.setState({ cardOpen: true });
    this.setState({ item: e.target });
  }

  updateDescription(e) {
    this.setState({ description: e.target.value });
  }

  saveDescription(e) {
    this.setState({ cardOpen: false });
    console.log('Description: ' + this.state.description);
  }

  render() {
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
      <div>
        <ul className={'listI list' + this.props.id}>
          {items.map(item => (
            <li
              id={'target-' + item.id}
              key={item.id}
              className="item"
              draggable="true"
              item={item}
              onClick={this.seeCard.bind(this)}
            >
              <div className="row" style={{paddingLeft:"1vw"}}><p>Name: {item.name}</p></div>
              <div className="row" style={{paddingLeft:"1vw"}}><p>Date: {item.deadline}</p></div>
              <div className="row" style={{paddingLeft:"1vw"}}><p>Content: {item.description}</p></div>
            </li>
          ))}
        </ul>
        <footer>
          {this.state.addingItem ? (
            <div className="newItem">
              <p>Nombre</p>
              <input
                autoFocus
                onChange={this.addCardName.bind(this)}
                ref={name => (this.txtarea = name)}
              />
              <p>Fecha de entrega</p>
              <input
                autoFocus
                onChange={this.addCardDate.bind(this)}
                ref={date => (this.txtarea = date)}
              />
              <p>Descripción</p>
              <textarea
                autoFocus
                onChange={this.addCard.bind(this)}
                ref={el => (this.txtarea = el)}
              />
              <button className="addBtn" onClick={this.update.bind(this)}>
                Add
              </button>
              <button className="closeBtn" onClick={this.closeCard.bind(this)}>
                x
              </button>
            </div>
          ) : (
            <a className="addCard" onClick={this.addCard.bind(this)}>
              Añade recordatorio...
            </a>
          )}
        </footer>
      </div>
    );
  }
}
