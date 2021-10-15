import React from "react";
//Composant ListItem
function ListItem(props) {
  const item = props.item;
  return <li key={item.toString()}>{item}</li>;
}
// Composant Alphabet
function Alphabet(props) {
  const maListe = props.maListe;
  const listItems = maListe.map((list) => <ListItem item={list} />);
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
