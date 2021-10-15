
class App extends React.Component {
    render() {
        return (
                <div>
                <h1>Bonjour</h1>
                <p>tout le monde</p>
                </div>
        )
    }
}

/**
 * Quand on veut rendre quelque chose sur l'écran on doit utiliser une methode render à l'interieur du composant. cette méthode peut renvoyer des éléments simples ou multiples. elle ne rendra qu'un seul noeud racine à l'intérieur à la fois.
 * Si on souhaite renvoyer plusieurs éléments, la méthode render nécessitera une balise <div></div> et placera tout le contenu ou les éléments à l'intérieur. 
 * => Ce noeud supplémentaire dans le DOM entraine parfois un mauvais formatage de votre sortie HTML.
 * 
 * Pour résoudre ce problème, React a introduit les fragments (v.16.2). Les fragments vous permettent de regrouper une liste d'enfants sans ajouter de noeuds supplémentaires au DOM.
 * 
 * Syntaxe :
 * <React.Fragment>
 * <h1>child1</h1>
 * <p>child2</p>
 * .....
 * </React.Fragment>
 */
class App1 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Bonjour</h1>
        <p>tout le monde</p>
      </React.Fragment>
    );
  }
}
/**
 * les principales raison d'utiliser le tag Fragment :
 * -- rend l'execution du code plus rapide que la balise div
 * -- nécessite moins de mémoire
 * 
 */

/**
 * il existe une autre abréviation pour la déclaration des fragments. elle ressemble a une balise vide dans laquelle on peut utiliser "<>" au lieu de React.Fragment
 */

class App1 extends React.Component {
  render() {
    return (
      <>
        <h1>Bonjour</h1>
        <p>tout le monde</p>
      </>
    );
  }
}