/**
 * React propose une apprche stateful et réactive pour contsruire une forme
 * le composant plutot que le DOM s'occupe de la forme React.
 * Dans React, la forme est généralement mise en oeuvre en utilisant des composants controlés.
 * il y a deux types de saisie de formulaire dans React :
 * -- Composant non controlé
 * -- Composant controlé
 * 
 * ----------------- Composant non controlé ----------
 * l'entrée non controlée est similaire aux entrées traditionnelles de HTML.
 * Le DOM traite lui-meme les données du formulaire.
 * les éléments HTML conservent leur propre état qui sera mis à jour lorsque la valeur d'entrée change.
 * pour écrire un composant non controlé vous devez utiliser une référence pour obtenir les valeurs du formulaire à partir du DOM.
 * 
 * ----------------- Composant controlé ----------
 * Dans ce cas l'élément de formulaire de saisie est géré par le composant plutot que par le DOM
 * L'état mutable est conservé dans la proprieté stateet ne sera mis à jour qu'avec la méthode setState().
 * Les composants controlés on des fonctions qui régissent les données qui leur sont transmises lors de chaaque evnt onChange plutot que de saisir les données une seule fois.
 * ces données sont ensuite enregistrées dans state et mises à jour avec la méthode setState().
 * Un composant controlé prend sa valeur actuelle par le biais de props et notifie les changements par des rappels comme un événement onChange.
 * 
 * Pour traiter plusieurs éléments d'entrée controlés, ajoutez un attribut de nom à chaque élément, puis la fonction de traitement décide de ce qu'il faut faire en fonction de la valeur de event.target.name
 * 
 *  --------------- Controlé VS Non Controlé --------------
 * Controlé :
 * 
 * 1- Il ne maintient pas son état interne
 * 2- les données sont controlés par le composant parent
 * 3- il accepte sa valeur actuelle en tant que prop
 * 4- il permet un controle de validaton
 * 5- il a un meilleur controle sur les éléments du formulaire et les données
 * 
 * Non Controlé :
 * 
 * 1- maintient ses états internes
 * 2- les données sont controlées par le DOM lui-meme
 * 3- utilise un ref pour leurs valeurs actuelles
 * 4- il ne permet pas un controle de validaton
 * 5- il a un controle limité sur les éléments du formulaire et les données
 */