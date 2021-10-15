//on ajouter une référence pour stocker la référence à un noeud ou élément DOM
class App extends React.Component {
  constructor(props) {
    super(props);
    this.callRef = React.createRef();
    this.addRef = this.addRef.bind(this);
  }

  addRef(){
      this.callRef.current.focus();
  }

  render() {
      return(
          <div>
              <h2>Ajouter Ref à des éléments DOM</h2>
              <input type="text"
              ref={this.callRef }/>
              <input type="button"
              value="Ajouter texte"
              onClick = {this.addRef}
              />
          </div>
      );
  }
}
