/**
 * Différence entre State et props : les props sont immuables
 * => le composant conteneur doit définir le state qui peut etre mis à jour, tandis que les composants
 * enfants ne doivent transmettre les données de state qu'à l'aide des props
 * 
 * Lorsque nous avons besoin de données immuables dans le composant on peut tout simplement ajouter props à la fonction ReactDOM.render() dans main.js et l'utiliser dans le composant
 * On peut également définir des valeurs de props par défaut directement sur le constructeur du composant au lieu de l'ajouter à ReactDOM.render() 
 */