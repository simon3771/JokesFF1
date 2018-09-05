import React from 'react';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    handleSubmit(event) {
       alert('Your favorite flavor is: ' + this.state.value);
       event.preventDefault();
     }


  render(){
    return(
      <form onSubmit = {this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value = "general">general</option>
          <option value = 'knock-knock'>knock-knock</option>
          <option value = 'programming'>programming</option>
        </select>
        <button type="submit">Test</button>
      </form>
    )
  }
}

export default Form;
