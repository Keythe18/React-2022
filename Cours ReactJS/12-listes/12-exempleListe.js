
import React from "react";
//Composant Alphabet
function Alphabet(props) {
  const maliste = props.maliste;
  const listItems = maliste.map((maliste) => <li>{maliste}</li>);
  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
}
const maliste = ["a", "b", "c", "d"];

class App extends React.Component {
  render() {
    return <Alphabet maliste={maliste} />;
  }
}
export default App;
