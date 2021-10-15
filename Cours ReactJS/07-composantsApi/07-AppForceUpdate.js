import React from 'react';

class App extends React.Component {
constructor(){
  super();
  this.forceUpdateState = this.forceUpdateState.bind(this);
}
forceUpdateState(){
  this.forceUpdate();
}
render(){
  return (
    <div>
      <h1>Générer un nombre aléatoire</h1>
      <h3>Nombre aléatoire : {Math.random()}</h3>
      <button onClick={this.forceUpdateState}>forceUpdate</button>
    </div>
  )
}
}
export default App;