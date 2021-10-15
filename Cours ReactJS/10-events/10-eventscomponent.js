import React from "react";

class App extends React.Component {
 constructor(props){
 super(props);
 this.state = {
      age:''
  };
  
 }
 changeText(event){
   this.setState({
     age: event.target.value
   })
 }
   
 render(){
   return(
     <div>
      <h1>Evenement</h1>
      <label htmlFor=""> Entrez votre age: </label>
      <input type="text" id="age" onChange={this.changeText.bind(this)}/>
      <h4>Vous avez saisi: {this.state.age}</h4>
      </div>
   )
 }
}
export default App;
