import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import JokesSearch from './JokesSearch';

// The App component is the main component of the application. The application's title, the Form component, and the Jokes component are both rendered inside of this component.
class App extends Component {
  render() {
    return (
      <div className = "page">
          <h1 className="App-title">Jokes</h1>
          <Form />
          <JokesSearch />
      </div>
    );
  }
}

export default App;
