import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './App.css'
import Form from './Form';


class App extends Component {
  render() {
    return (
      <div className = "page">
          <h1 className="App-title">Jokes</h1>
          <Form />
      </div>
    );
  }
}

export default App;
