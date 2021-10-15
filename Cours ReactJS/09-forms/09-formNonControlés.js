import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.updateSubmit = this.updateSubmit.bind(this);
    this.input = React.createRef();
  }
  updateSubmit(event) {
    alert(`Vous avez saisi le nom d'employé et le département avec succès.`);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.updateSubmit}>
        <h1>Form composant non controlé</h1>
        <label>
          Nom employé :<input type="text" ref={this.input}></input>
        </label>
        <label>
          Département :<input type="text" ref={this.input}></input>
        </label>
        <input type="submit" value="Soumettre"></input>
      </form>
    );
  }
}
export default App;
