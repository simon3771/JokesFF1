import React from 'react';
import axios from 'axios';
import './App.css';

class SingleJoke extends React.Component {
  constructor(){
    super();
    this.state = {
      joke: []
    }
  }

  componentDidMount(){
    axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then((res) => {
        let joke = res.data;
        console.log('yo tommy')
        console.log(joke)
        this.setState( {joke} );
      })
  }

moneyBagsFilter(){
  let type = this.props.money
  console.log('yo xavi')
  console.log(type);
  return this.state.joke.map(j => {
    if(type === j.type){
     let something = <li key = {j.id}>{j.setup}<span>{j.punchline}</span></li>
     return something
  }
  })
}

  render(){







    return(
      <div className = "alljokes">
        <ul id="jokes">{this.moneyBagsFilter()}</ul>
      </div>
    )
  }
}

export default SingleJoke
