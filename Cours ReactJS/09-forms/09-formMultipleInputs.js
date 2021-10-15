import React from "react";

class App extends React.Component {
 constructor(props){
 super(props);
 this.state = {
   ordinateurneuf : true,
   nbordinateur: 20
  };
 this.handleChange = this.handleChange.bind(this);
 }
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name] : value
    });
  }
 render(){
   return(
     <form onSubmit={this.submit}>
     <h1>Form Composant controlé à entrées multiples</h1>
      <label>
        Ordinateur neuf:
        <input 
        name="ordinateurneuf"
        type = "checkbox"
        checked ={this.state.ordinateurneuf}
        onChange={this.handleChange}/>
      </label>
      <br/>
      <label>
        Nombre d'ordinateurs :
        <input 
        name="nbordinateur"
        type = "number"
        value ={this.state.nbordinateur}
        onChange={this.handleChange}/>
      </label>
     </form>
   )
 }
}
export default App;
