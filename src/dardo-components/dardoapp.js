import React, { Component } from 'react';

import './css/dardoapp.css';
import Dogs from './Dogs'


class DardoApp extends Component {
  render() {
    return (
      <div className="page" >
        <h1 className="App-title">Dogs R Awesome</h1>
        <Dogs />
      </div>
    );
  }
}

export default DardoApp;
