import React from 'react';

//The Form component lets the user select a joke type and extracts the value that was selected.
class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      value: 'general',
    };


//These bindings make it so that "this" is able to be called within the component's methods.
    this.handleChange = this.handleChange.bind(this);
  }

// This method updates the state of the component to the value of the user-selected option in our form.
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render(){

//this section contains the values that are rendered to the DOM when calling an instance of the Form component.
    return(
      <div>
        <form>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value = "general">general</option>
            <option value = 'knock-knock'>knock-knock</option>
            <option value = 'programming'>programming</option>
          </select>
        </form>
      </div>
    )
  }
}

export default Form;
