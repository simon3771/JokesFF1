import React, { Component } from 'react';
import './dogicon copy.png';
import './css/dardoapp.css';
import Dogs from './Dogs';


class DardoApp extends Component {
  render() {
    return (
      <div className="page" >
        <h1 className="dogApp-title">Dogs are Awesome</h1>
        <h2 className="marquee"><span className="marqueespan">
          <img height='27px' width='27px' src="https://i.imgur.com/xKmdX0c.png" alt="dogicon"></img> Press the Button below for more Dogs <img className="minidog2" height='27px' width='27px' src="https://i.imgur.com/xKmdX0c.png" alt="dogicon"></img> </span></h2>
        <Dogs />
      </div>
    );
  }
}

export default DardoApp;
