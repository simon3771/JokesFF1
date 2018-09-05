import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './Jokes';
import './App.css'


class App extends Component {
  render() {
    return (
      <div className = "page">
          <h1 className="App-title">Jokes</h1>
          <Jokes />
      </div>
    );
  }
}

export default App;
