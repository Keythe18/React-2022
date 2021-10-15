/**
 * le composant ReactJs est une API de haut niveau
 * il rend le code complètement individuel et réutilisable dans l'appli. il comprend des diférentes méthodes pour :
 * -créer des éléments
 * -transformer des éléments
 * -fragments
 *  Trois principales méthodes disponibles dans l'API du composant React : 
 * -setState()
 * -forceUpdate()
 * -findDOMNode()
 * ---------setState()---------------
 * utilisée pour mettre à jour l'état du composant, elle ne remplace pas toujours l'état immédiatement
 * au lieu de cela elle ajoute seulement les changements à l'état original.
 * utilisée pour mettre à jour l'interface utilisateur (UI) en réponse aux gestionnaires d'événements et aux réponses du serveur
 * Syntaxe : this.setState(object newState[,fn callback]);
 * 
 * ---------forceUpdate()-------------
 * Cette méthode permet de mettre à jour le composant manuellement
 * Syntaxe: this.forceUpdate(callback)
 * 
 * -----------findDOMNode()--------------
 * pour la manipulation des DOMs, on doit utiliser la méthode ReactDOM.findDOMNode()
 * cette méthode nous permet de trouver ou d'accéder au Noeud DOM sous-jacent
 * Syntaxe : ReactDOM.findDOMNode(component)
 */