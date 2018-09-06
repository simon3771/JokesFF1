import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
// import { Button } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import './css/singleJoke.css'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class SingleJoke extends React.Component {
  constructor(){
    super();
    this.state = {
      joke: []
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e){
    e.preventDefault()
    axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then((res) => {
        let joke = res.data;
        this.setState( {joke} );
  })
}

moneyBagsFilter(){
  let type = this.props.money
  return this.state.joke.filter(j => {
    return type === j.type}).map(j => {
       let something =
       <div>
         <li key = {j.id}>{j.setup}</li>
         <li className = "punchLine flash">{j.punchline}</li>
       </div>
       return something
     })
   }


chooseOneJoke(){
  let array = this.moneyBagsFilter()
  // console.log(array.length)
  let randNumb = Math.floor(Math.random() * array.length)
  let oneJoke = array[randNumb]
  // console.log(oneJoke)
  return oneJoke
}

  render(){

    return(
      <div className = "alljokes">
        <div className = "jokeDisplay">
          <ul id="jokes">{this.chooseOneJoke()}</ul>
        </div>
        <form onSubmit={this.handleSubmit}>
        <Button type = "submit" id="red" variant="outlined"  className="button">
          Activate Lasers
        </Button>
        </form>
      </div>
    )
  }
}

export default withStyles(styles)(SingleJoke);
