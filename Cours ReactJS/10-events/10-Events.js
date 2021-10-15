/**
 * Le système de gestion des événements dans React est très similaire à la gestion des événement sur les éléments DOM.
 * Ce système est connu sous le nom d'événements synthétiques => c'est une enveloppe de navigateur croisée de l'événement  natif du navigateur
 * Les événements de react sont nommés en camelCase au lieu des minuscules
 * avec JSX: une fonction est passée en tant que eventHandler au lieur d'une chaine de caractère
 * Exemple :
 * En HTML :
 * <button onClick="afficherMessage()">Bonjour</button>
 * En React : 
 * <button onClick={afficherMessage}>Bonjour</button>
 * 
 * En react, on ne peut pas retourner false pour empecher le comportement par défaut. on doit appeler preventDefault pour prévenir le comportement par défaut.
 * En HTML :
 * <a href="#" onClick="console.log('vous avez cliquer sur un lien'); return false">cliquer</a>
 * En React :
 *
 * handleClick(event){
 *          event.preventDefault();
 *          console.log('vous avez cliquer sur un lien');  
 * }
 * return (
 * <a href="#" onClick="{handleClick}">cliquer</a>
 * )
 * 
 */