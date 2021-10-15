import React from 'react';

class App extends React.Component {
constructor(){
  super();
  this.state ={
    message :"Bonjour tout le monde"
  };
  this.updateSetState = this.updateSetState.bind(this);
}
updateSetState(){
  this.setState({
    message :"Bienvenue à la formation ReactJs"
  });
}
render(){
  return (
    <div>
      <h1>{this.state.message}</h1>
      <button onClick={this.updateSetState}>SET State</button>
    </div>
  )
}
}
export default App;