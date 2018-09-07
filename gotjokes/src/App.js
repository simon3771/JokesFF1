import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import Favicon from 'react-favicon';
import './img/arrow.png'
import './img/favicon.ico'


// The App component is the main component of the application. The application's title, the Form component, and the Jokes component are both rendered inside of this component.
class App extends Component {
  render() {
    return (
      <div className = "page">
        <Favicon url="/static/media/favicon.54d4bcf7.ico" />
        <div className = "form-div">
          <Form />
        </div>
        <div className="leftStuff">
          <h1 id="leftSideText">Go here to get the punchline!</h1>
          <img className="invert" id="arrow" src= "/static/media/arrow.d21bae52.png" alt="arrow" />
        </div>
      </div>
    );
  }
}

export default App;
