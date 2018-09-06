import React, { Component } from 'react';
import './App.css';
import Form from './Form';

// The App component is the main component of the application. The application's title, the Form component, and the Jokes component are both rendered inside of this component.
class App extends Component {
  render() {
    return (
      <div className = "page">
        <div className = "form-div">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
