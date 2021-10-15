class App extends React.Component {
  constructor(props) {
    super(props);
    this.callRefInput = null;
    this.setInputRef = (element) => (this.callRefInput = element);
    this.focusRefInput = () => {
      if (this.callRefInput) this.callRefInput.focus();
    };
  }
  componentDidMount() {
    this.focusRefInput();
  }
  render(){
      return (
          <div>
              <h2>Exemple Callback Refs</h2>
              <input 
              type="text"
              ref={this.setInputRef} />
              <input 
              type="button"
              value ="Focus input text"
              onClick ={this.focusRefInput}/>
          </div>
      )
  }
}
/**
 * React appelle le callback ref pour stocker la référence à l'élément DOM d'entrée lorsque le composant se monte, et lorsque le composant se démonte, l'appellera avec null.
 * les références sont à jour avant que le componentDidMount ou componentDidUpdate ne se déclenche.
 * le passage des refs de callback entre les composants est le meme que celui que vous pouvez utiliser pour les refs d'objets qui sont créées avec React.createRef()
 */