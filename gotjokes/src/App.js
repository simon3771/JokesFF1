import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Jokes from './jokes.js';

class App extends Component {
  render() {
    return (
      <div>

          <h1 className="App-title">Jokes</h1>
          <Jokes/>
      </div>
    );
  }
}

export default App;
