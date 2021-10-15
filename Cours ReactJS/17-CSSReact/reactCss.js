/**
 * l'attribut style est l'attribut le plus utilisé pour le styling dans les applications React qui ajoute des styles calculés dynamiquement au moment du rendu.
 * Il accepte un objet Javascrip dans les proprietés camelCased plutot qu'une chaine CSS.
 * 
 * 4 façons de styliser :
 * --Inline Styling
 * --CSS Stylesheet 
 * --CSS module
 * --Styled Components
 */
class App extends React.Component {
  render() {
    return <h1 style={{ color: "green" }}>Accueil</h1>;
  }
}
export default App;
/**
 * dans cet exemple on a utilisé double accolades car dans JSX les expressions Javascript sont écrites à l'intérieur d'accolades et les objets Javascript utilisent également des accolades de sorte que le style est écrit à l'intérieur de deux ensembles d'accolades {{}}.
 */
// appliquer la syntaxe camelCase sur les proprietés qui ont deux noms
class App extends React.Component {
  render() {
    return (
      <>
        <h1 style={{ color: "green" }}>Accueil</h1>
        <p style = {{backgroundColor :"lightgreen"}}>Bienvenue</p>
      </>
    );
  }
}
export default App;
// Utiliser Objet Javascript : créer un objet avec des infos de style et le référencer dans l'attribut style
class App extends React.Component {
  render() {
    const styleObj = {
      color: "blue",
      backgroundColor: "lightblue",
      padding: "20px",
      fontFamily:"serif"
    };
    return (
      <>
        <h1 style={styleObj}>Accueil</h1>
        <p style={{ backgroundColor: "lightgreen" }}>Bienvenue</p>
      </>
    );
  }
}
export default App;
/***
 * -----------Styled-components-------------
 * c'est une bibliothèque pour React, elle utilise le CSS amelioré pour styliser les composants React dans l'application qui est ecrite avec un mélange de javascript et de css.
 * ils fournissent : 
 * -- Css critique automatique 
 * --pas de bugs dans les noms de classe 
 * --Suppression plus facile du css
 * --un style simple et dynamique 
 * -----Installation-----
 * npm install styled-components --save
 */
