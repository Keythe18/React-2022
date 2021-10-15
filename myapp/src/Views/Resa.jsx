import React from "react";

function Result() {
  return (
    <>
      <h1>Informations saisies</h1>
      <p>Nom et Prenom :</p>
      <p>Age :</p>
      <p>Sexe :</p>
      <p>Destination :</p>
      <p>Restrictions Alimentaires :</p>
    </>
  );
}

class Resa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: { value: "" },
      prenom: { value: "" },
    };
  }
  render() {
    const { prenom, nom } = this.state;
    const handleSubmit = () => {
      console.log(prenom.current.value);
      console.log(nom.current.value);
    };
    return (
      <div>
        <form>
          <label>
            <div>
              <h1>Formulaire de Reservation</h1>
              <input
                value={this.state.prenom.value}
                type="text"
                placeholder="Prenom"
              />
              <input
                value={this.state.nom.value}
                type="text"
                placeholder="Nom"
              />
              <input type="text" placeholder="Age" />
            </div>
            <div>
              <input type="radio" value="homme" name="sex" />
              <label for="homme">Homme</label>
              <input type="radio" value="femme" name="sex" />
              <label for="femme">Femme</label>
            </div>
            <div>
              <select name="destination" id="destination-choix">
                <option value="">--Choisissez une destination--</option>
                <option value="paris">Paris</option>
                <option value="marseille">Marseille</option>
                <option value="hawaii">Hawaii</option>
                <option value="japon">Japon</option>
                <option value="canada">Canada</option>
                <option value="miami">Miami</option>
              </select>
            </div>
            <div>
              <input
                type="checkbox"
                id="restrictionsNoix"
                name="restrictionsNoix"
              />
              <label for="restrictions">Sans Noix</label>
              <input
                type="checkbox"
                id="restrictionsLactose"
                name="restrictionsLactose"
              />
              <label for="restrictions">Sans Lactose</label>
              <input
                type="checkbox"
                id="restrictionsVegetarien"
                name="restrictionsVegetarien"
              />
              <label for="restrictions">Vegetarien</label>
            </div>
            <input type="submit" value="Soumettre" onSubmit={handleSubmit} />
          </label>
        </form>
        <Result />
      </div>
    );
  }
}

export default Resa;
