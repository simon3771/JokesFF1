import React, { Component } from 'react';

import './css/dardoapp.css';
import Dogs from './Dogs'


class DardoApp extends Component {
  render() {
    return (
      <div className="page" >
        <h1 className="dogApp-title">Dogs are Awesome</h1>
        <h2 className="marquee"><span className="marqueespan">Press the Button below for more Dogs</span></h2>
        <Dogs />
      </div>
    );
  }
}

export default DardoApp;
