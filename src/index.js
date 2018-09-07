import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Credits from './Credits';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/home.css';
import Favicon from 'react-favicon';
import './img/favicon.ico';
import PaperSheet from './PaperSheet';


class Home extends React.Component{
  render(){
    return(
      // your code goes here
      <div >
        <Favicon url="/static/media/favicon.54d4bcf7.ico" />
        <PaperSheet />
        <div className= "wynJokeContainer">
          <div className = "row">
            <h1 className = "wynJoke">Welcome to WynJoke!</h1>
          </div>
          <BrowserRouter>
            <div id="browserDiv">
              <h1 className = "jokePageLink"><Link id= "jokeLink" to="/">Home</Link></h1>
              <h1 className = "jokePageLink"><Link id= "jokeLink" to="/jokes">Jokes</Link></h1>
              <h1 className = "jokePageLink"><Link id= "jokeLink" to="/jokes/credits">Credits</Link></h1>
              <Route path="/jokes/" component={ App }/>  
              <Route path="/jokes/credits" component={ Credits }/>
            </div>
          </BrowserRouter>
        </div>

      </div>
    )
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
