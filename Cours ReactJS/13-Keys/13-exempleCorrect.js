import React from "react";
//Composant ListItem
function ListItem(props) {
  const item = props.item;
  return (
    //Pas besoin de mettre la clé ici
    <li>{item}</li>
  );
}
/**
 * Pour corriger l'exemple précedent, faudrait attribuer une clé à l'itétarteur map()
 *
 *
 */
// Composant Alphabet
function Alphabet(props) {
  const maListe = props.maListe;
  const listItems = maListe.map((list) => (
    //La clé doit etre spécifiée ici
    <ListItem key={maListe.toString()} item={list} />
  ));
  return (
    <div>
      <h2>Exemple incorrecte d'utilisation d'une clé</h2>
      <ol>{listItems}</ol>
    </div>
  );
}
const maListe = ["a", "b", "c", "d"];
class App extends React.Component {
  render() {
    return <Alphabet maListe={maListe} />;
  }
}
export default App;
