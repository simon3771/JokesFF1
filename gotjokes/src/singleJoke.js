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
  constructor() {
    super();
    this.state = {
      joke: [],
      activateLasers: 0,
      laserStatus: 'inactive',
      buttonText: 'Get New Joke',
      arrows: 'off'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then((res) => {
        let joke = res.data;
        this.setState({ joke });
      })
  }


  handleSubmit(e) {
    e.preventDefault()
    axios.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten`)
      .then((res) => {
        let joke = res.data;
        this.setState({ activateLasers: this.state.activateLasers + 1, joke })
        console.log(this.state.activateLasers)
        if ((this.state.activateLasers + 1) % 5 === 16) {
          this.setState({ buttonText: 'Activate Lasers', arrows: 'arrowOn' })
        }
        else { this.setState({ buttonText: 'Get New Joke', arrows: 'off' }) }

        if (this.state.activateLasers % 5 === 16) {
          this.setState({ laserStatus: 'active', arrows: 'off' })
        }
        else { this.setState({ laserStatus: 'inactive' }) }
      })



  }

  moneyBagsFilter() {
    let type = this.props.money
    return this.state.joke.filter(j => {
      return type === j.type
    }).map(j => {
      let something =
        <div>
          <li key={j.id}>{j.setup}</li>
          <li className="punchLine flash">{j.punchline}</li>
        </div>
      return something
    })
  }


  chooseOneJoke() {
    let array = this.moneyBagsFilter()
    // console.log(array.length)
    let randNumb = Math.floor(Math.random() * array.length)
    let oneJoke = array[randNumb]
    // console.log(oneJoke)
    return oneJoke
  }

  makeArrows() {
    let arrows = []
    for (let i = 0; i < 6; i++) {
      arrows.push(<img className="invert" id="arrow" src="/static/media/arrow.d21bae52.png" alt="arrow" />)
    }
    return arrows
  }

  render() {

    return (
      <div id={this.state.laserStatus}>
        <div className="alljokes">
          <div>
            <h1 className={this.state.laserStatus}>GET REKT BRO</h1>
          </div>
          <div className="jokeDisplay">
            <ul className="jokes">{this.chooseOneJoke()}</ul>
          </div>
          <form onSubmit={this.handleSubmit}>
            <Button type="submit" id="red" variant="outlined" className="button">
              {this.state.buttonText}
            </Button>
          </form>
        </div>
        <div className="arrows">
          <img className={this.state.arrows} id="arrow1" src="/static/media/white-arr.5270f056.png" alt="arrow" />
          <img className={this.state.arrows} id="arrow2" src="/static/media/white-arr.5270f056.png" alt="arrow" />
          <img className={this.state.arrows} id="arrow3" src="/static/media/white-arr.5270f056.png" alt="arrow" />
          <img className={this.state.arrows} id="arrow4" src="/static/media/white-arr.5270f056.png" alt="arrow" />
          <img className={this.state.arrows} id="arrow5" src="/static/media/white-arr.5270f056.png" alt="arrow" />
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SingleJoke);
