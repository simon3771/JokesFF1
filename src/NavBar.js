import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import App from './App';
import Credits from './Credits';
import './css/home.css';
import Home from './index'
import DardoApp from './dardo-components/dardoapp';


class NavBar extends React.Component{
  render() {
    return (
      <div>

      <BrowserRouter>
        <div id="browserDiv">
          <h1 className = "jokePageLink"><Link id= "jokeLink" to="/">Home</Link></h1>
          <h1 className = "jokePageLink"><Link id= "jokeLink" to="/jokes">Jokes</Link></h1>
          <h1 className = "jokePageLink"><Link id= "jokeLink" to="/dogs">Dogs</Link></h1>
          <h1 className = "jokePageLink"><Link id= "jokeLink" to="/credits">Credits</Link></h1>
          <Route exact path="/" component={ Home }/>
          <Route path="/jokes/" component={ App }/>
          <Route path="/dogs/" component={ DardoApp }/>
          <Route path="/credits" component={ Credits }/>
        </div>
      </BrowserRouter>
    </div>

    )
  }
}

export default NavBar;
