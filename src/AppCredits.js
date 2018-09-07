import React, { Component } from 'react';
import './App.css';
import Form from './Form';
import './img/arrow.png';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Credits from './Credits';




// The App component is the main component of the application. The application's title, the Form component, and the Jokes component are both rendered inside of this component.
class AppCredits extends Component {
  render() {
    return (
      <div className = "page">
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

export default AppCredits;
