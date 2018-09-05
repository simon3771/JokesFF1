import React from 'react';
import Jokes from './Jokes';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 'general'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

    handleSubmit(event) {
      event.preventDefault()
      let jokeChoice = this.state.value
    }




  render(){
    return(
      <div>
        {console.log('yo')}
      <form onSubmit = {this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value = "general">general</option>
          <option value = 'knock-knock'>knock-knock</option>
          <option value = 'programming'>programming</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      <Jokes />
      </div>
    )
  }
}

export default Form;
