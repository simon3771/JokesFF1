import React from 'react';
import axios from 'axios';
import './css/Jokes.css';
import Jokes from './Jokes'

//The Jokes component retrieves the jokes from the API and displays the Jokes to the user.
class JokesSearch extends React.Component {
  constructor(){
    super()
    this.state = {
      joke: []
    };
  }

//When the app starts up, this method gets the jokes and updates this.state with the data that was recieved.
  componentDidMount(){
    let jokePlus = []
    fetch(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then(response => {
        return response.json();
      }).then(data => {
        jokePlus = data.map((joke) => {
          return joke
        });
        console.log(jokePlus)
        this.setState({
          joke: jokePlus
        })
      })
  }

render(){

    return (
      <Jokes state={this.state} />
    )
  }
}

export default JokesSearch;
