import React from 'react';
import axios from 'axios';

let app = axios();

class Jokes extends React.Component {

   joke(){
     app.get(`https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke`,function(res, req){
    res.send(data.body)
  })
}

  render()
  return(<h3>{this.joke}</h3>);

}
export default Jokes;
