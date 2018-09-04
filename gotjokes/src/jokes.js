import React from 'react';
import axios from 'axios';

class Jokes extends React.Component {
  constructor(){
    super()
    this.state = {
      joke: []
    };
    this.activateLasers = this.activateLasers.bind(this);
  }


  componentDidMount() {

   }

  activateLasers(){
    console.log(this);
     axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`)
       .then((res) => {
         const joke = res.data;
         console.log(this)
         this.setState( {joke} );
         console.log(joke)
       })
   }

  render(){
    return(
      <div className = "textStuff">
        <button onClick={this.activateLasers}>
          Activate Lasers
        </button>
        <ul>
          <li>{this.state.joke.setup}</li>
          <li>{this.state.joke.punchline}</li>
        </ul>
    </div>
    )
  }
}

export default Jokes;
