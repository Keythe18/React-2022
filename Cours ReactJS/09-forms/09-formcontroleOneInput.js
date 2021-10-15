import React from "react";

class App extends React.Component {
 constructor(props){
 super(props);
 this.state = {value : ''};
 this.change = this.change.bind(this);
 this.submit= this.submit.bind(this);
 }
 change(event){
   this.setState({value : event.target.value})
 }
 submit(event){
   alert('Vous avez soumis le formulaire avec succès: ' +this.state.value);
   event.preventDefault();
 }

 render(){
   return(
     <form onSubmit={this.submit}>
     <h1>Form Composant controlé</h1>
     <label>
        Nom Entreprise: 
        <input type="text" value={this.state.value} onChange={this.change}/>
     </label>
      <input type="submit" value="Soumettre Form"/>
     </form>
   )
 }
}
export default App;
