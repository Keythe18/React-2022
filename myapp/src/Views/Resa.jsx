import React from "react";

class Resa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit(event) {  
    event.preventDefault();  
  }  

  render() {
    return (
      <div>
        <form>
          <label>
            <div>
              <h1>Formulaire de Reservation</h1>
              <input
                type="text"
                name="prenom"
                placeholder="Prenom"
                value={this.state.prenom}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                value={this.state.nom}
                onChange={this.handleChange}
              />
              <input
                type="text"
                pattern="[0-9]*"
                name="age"
                placeholder="Age"
                value={this.state.age}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="radio"
                value="Homme"
                name="sexe"
                onChange={this.handleChange}
              />
              <label for="homme">Homme</label>
              <input
                type="radio"
                value="Femme"
                name="sexe"
                onChange={this.handleChange}
              />
              <label for="femme">Femme</label>
            </div>
            <div>
              <select name="destination" onChange={this.handleChange}>
                <option value="">--Choisissez une destination--</option>
                <option value="Paris">Paris</option>
                <option value="Marseille">Marseille</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Japon">Japon</option>
                <option value="Canada">Canada</option>
                <option value="Miami">Miami</option>
              </select>
            </div>
            <div>
              <input
                name="restriction"
                type="checkbox"
                value="Sans Noix"
                onChange={this.handleChange}
              />
              <label for="restrictions">Sans Noix</label>
              <input
                name="restriction"
                type="checkbox"
                value="Sans Lactose"
                onChange={this.handleChange}
              />
              <label for="restrictions">Sans Lactose</label>
              <input
                name="restriction"
                type="checkbox"
                value="Vegetarien"
                onChange={this.handleChange}
              />
              <label for="restrictions">Vegetarien</label>
            </div>
            <input type="submit" value="Soumettre" />
          </label>
        </form>
        <h1>Informations saisies</h1>
        <p>Prenom : {this.state.prenom}</p>
        <p>Nom : {this.state.nom}</p>
        <p>Age : {this.state.age}</p>
        <p>Sexe : {this.state.sexe}</p>
        <p>Destination : {this.state.destination}</p>
        <p>Restrictions Alimentaires : {this.state.restriction}</p>
      </div>
    );
  }
}

export default Resa;
