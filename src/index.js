import React from 'react';
import ReactDOM from 'react-dom';
import './css/home.css';
import Favicon from 'react-favicon';
import './img/favicon.ico';
import laughingicon from './dardo-components/smileyicon.png'
import PaperSheet from './PaperSheet';
import NavBar from './NavBar'


export default class Home extends React.Component {
  render() {
    return (
      // your code goes here
      <div >
        <Favicon url="/static/media/favicon.54d4bcf7.ico" />
        <div className="wynJokeContainer">
          <div className="row">
            <h1 className="wynJoke">Wynning Smiles</h1>
          </div>
          <img className="smileyFront" src={laughingicon} height="80px" width="80px" alt="laughingicon"></img>
        </div>
        <PaperSheet />
      </div >
    )
  }
}



ReactDOM.render(<NavBar />, document.getElementById('root'));
