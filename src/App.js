import React, { Component } from 'react';
import React from './React';
import './App.css';

class App extends Component {
  msgStyle = {
    fontSize: "24px",
    color: "#900",
    margin: "20px 0px",
    padding: "5px",
    borderBottom: "2px solod#900"
  }

  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello Component.',
    };

  }

  render() {
    return <div><h1>React</h1>
      <p>{this.state.msg}</p>
      <p>{this.props.msg}</p></div>
  }

}


export default App;
