import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './css/singleJoke.css'
import './img/white-arr.png'

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
      joke: [],
      activateLasers: 0,
      laserStatus: 'inactive',
      buttonText: 'Get New Joke',
      arrows: 'off',
      punchLine: 'punchLineOff'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.test = this.test.bind(this)
  }

test(e){
  console.log(e)
  e.stopPropagation();
  console.log(e)
  this.setState({punchLine: 'punchLineOn'})
  console.log(this.state.punchLine)
}

  componentDidMount(){
    axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then((res) => {
        let joke = res.data;
        this.setState( {joke} );
      })
  }


  handleSubmit(e){
    e.preventDefault()
    axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then((res) => {
        let joke = res.data;
        this.setState( { activateLasers: this.state.activateLasers + 1, joke, punchLine: 'punchLineOff'} )
        console.log(this.state.activateLasers)
        console.log(this.state.punchLine)
        if((this.state.activateLasers +1) % 5 === 0){
          this.setState( {buttonText: 'Activate Lasers', arrows: 'arrowOn'} )
        }
        else{ this.setState( {buttonText: 'Get New Joke', arrows: 'off'} )}

        if(this.state.activateLasers % 5 === 0){
          this.setState( {laserStatus: 'active', arrows: 'off'})
        }
        else{ this.setState( {laserStatus: 'inactive'} )}
  })

}






moneyBagsFilter(){
  let type = this.props.money
  return this.state.joke.filter(j => {
    return type === j.type}).map(j => {
       let something =
       <div className = "jokesMap">
         <li key = {j.id}>{j.setup}</li>
         <div className = "punchLineDiv">
           <li className = "punchLine flash">{j.punchline}</li>
         </div>
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

makeArrows(){
  let arrows = []
  for(let i=0; i< 6; i++){
    arrows.push(<img className="invert" id="arrow" src= "/static/media/arrow.d21bae52.png" alt="arrow" />)
  }
  return arrows
}

  render(){

    return(






//This div encompasses the entire page itself.
      <div className = "entireJokePage">
{/*This div encompasses the Joke display section as well as the hidden message. */}
          <div className = "jokeView" id= {this.state.laserStatus} >
            <div>
              <h1 className = {this.state.laserStatus}>GET REKT BRO</h1>
            </div>
            <div className = "jokeDisplay">
              <ul className="jokes">{this.chooseOneJoke()}</ul>
            </div>
          </div>




{/*This div encompasses the Get New Jokes button and the disappearing arrows that follow*/}
          <div className = "buttonAndArrowsTogether">

            <div className = "getJokesButton">
              <div>
                <form onSubmit={this.handleSubmit}>
                  <Button type = "submit" id="red" variant="outlined"  className="button">
                    {this.state.buttonText}
                  </Button>
                </form>
                <div className = "arrows">
                    <img className ={this.state.arrows} id="arrow1" src="/static/media/white-arr.5270f056.png" alt="arrow"/>
                    <img className ={this.state.arrows} id="arrow2" src="/static/media/white-arr.5270f056.png" alt="arrow" />
                    <img className ={this.state.arrows} id="arrow3" src="/static/media/white-arr.5270f056.png" alt="arrow" />
                    <img className ={this.state.arrows} id="arrow4" src="/static/media/white-arr.5270f056.png" alt="arrow" />
                    <img className ={this.state.arrows} id="arrow5" src="/static/media/white-arr.5270f056.png" alt="arrow" />
                </div>
              </div>
              <div>
            <Button type = "button" id="blue" variant="outlined"  className="button">
                  <span role="img" id="fist" aria-label="fist">👊🏼</span>
                </Button>
              </div>
            </div>

          </div>





      </div>
    )
  }
}

export default withStyles(styles)(SingleJoke);
