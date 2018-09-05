import React from 'react';
import axios from 'axios';
import './css/Jokes.css';
import Form from './Form';

class Jokes extends React.Component {
  constructor(){
    super()
    this.state = {
      joke: [],
      show: "show",
      hidden: "hidden"
    };
    this.activateLasers = this.activateLasers.bind(this);

  }

  activateLasers(){
     axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
       .then((res) => {
         let joke = res.data;
         console.log(joke)
         this.setState( {joke} );
         this.setState({show: "show", hidden: "hidden"})
       })
   }

  toggleJoke() {
    this.setState({show: "hidden", hidden: "show"})
  }


  render(){

    return(
      <div className = "textStuff">
        <div>
          <Form />
        </div>
        <button onClick={this.activateLasers}>
          Activate Lasers
        </button>
        <ul>
          {
            this.state.joke.map((el) =>
            <div>
              <li
                onClick={this.toggleJoke.bind(this)}
                className={this.state.show}
                key={el.id}>
                {el.setup}
              </li>
              <li
                onClick={this.toggleJoke.bind(this)}
                key={el.id}
                className={this.state.hidden}>
                {el.punchline}
              </li>
            </div>
          )}
        </ul>
    </div>
    )
  }
}

export default Jokes;
