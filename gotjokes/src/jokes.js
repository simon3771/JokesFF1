import React from 'react';

class Jokes extends React.Component {
  constructor() {
    super();
  }

  render(){
    let jokes = this.props.state.joke;
    let optionItems = jokes.map((joke) =>
      <option key={joke.type}>{joke.type}</option>
  );

  return (
      <div>
        <select>
          {optionItems}
        </select>
      </div>
    )
  }
}

export default Jokes;
