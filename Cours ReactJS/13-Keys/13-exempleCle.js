import React from "react";
//Composant Menu
function Menu(props) {
  const titre = (
    <ol>
      {props.data.map((show) => (
        <li key={show.id}>{show.title}</li>
      ))}
    </ol>
  );
  const contenu = props.data.map((show) => (
    <div key={show.id}>
      <h3>
        {show.title} : {show.contenu}
      </h3>
    </div>
  ));
  return (
    <div>
      {titre}
      <hr />
      {contenu}
    </div>
  );
}

const data = [
  { id: 1, title: "Premier", contenu: "Premier Message" },
  { id: 2, title: "Deuxième", contenu: "Deuxième Message" },
  { id: 3, title: "Troisième", contenu: "Troisième Message" },
];
class App extends React.Component {
  render() {
    return <Menu data={data} />;
  }
}
export default App;
