import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
constructor(){
  super();
  this.findDOMNode1 = this.findDOMNode1.bind(this);
  this.findDOMNode2 = this.findDOMNode2.bind(this);
};
render(){
  return (
    <div>
      <h1>Find Dom</h1>
      <button onClick={this.findDOMNode1}>trouver Dom Node 1</button>
      <button onClick={this.findDOMNode2}>trouver Dom Node 2</button>
      <h3  id="id1"> Node 1</h3>
            <h3  id="id2"> Node 2</h3>
    </div>
  );
}
findDOMNode1() {
  var div1 = document.getElementById('id1');
  ReactDOM.findDOMNode(div1).style.color = 'cyan';
}
findDOMNode2() {
  var div2 = document.getElementById('id2');
  ReactDOM.findDOMNode(div2).style.color = 'violet';
}
}
export default App;