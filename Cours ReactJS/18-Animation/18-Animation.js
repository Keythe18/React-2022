/**
 * l'animation est une technique dans laquelle les images sont manipulées pour apparaitre comme des images en mouvement.
 * Dans React on peut ajouter une animation en utilisant un groupe explicite de composants : React Transition Group
 * C'est un composant supplémentaire qui permet de gérer les états des composants et qui est utile pour définir les transitions d'entrée et de sortie.
 * il n'est pas capable de d'animer les styles lui-meme. au lieu de cela il expose les états de transition, gère les classes et les éléments de groupe, et manipule le DOM de manière utile.
 * 
 * Il possède principalement deux API pour créer des transitions :
 * --ReactTransitionGroup: c'est une API de bas niveau pour l'animation
 * --ReactCSSTransitionGroup: C'est API de haut niveau pour la mise en oeuvre de transitions et d'animations CSS de base 
 * 
 * Installation : npm install react-transition-group --save
 * L'API ReactTransitionGroup fournit 3 composantes principales :
 * --Transition
 * --CSSTransition
 * --TransitionGroup
 * 
 * 
 * ---------------------Transition--------------------------
 * ce composant dispose d'une API de compoosant simple pour décrire une transition d'un état de composant à un autre au fil du temps.
 * Il est principalement utilisé pour animer le montge et le démontage d'un composant.
 * on peut également l'utiliser pour les états de transition en place.
 * on peut accéder au composant Transition dans 4 états :
 * -entering
 * -entred
 * -exiting
 * -exited
 * 
 * -----------------CSSTransition------------
 * ce composant utilise des styleSheets CSS pour écrire la transition et créer l'animation.
 * il s'inspire de la biblio ng-animate. Il peut hériter de tous les props du composant transition.
 * 
 * on peut le diviser en 3 états :
 * -Appear 
 * -Enter
 * -Exit
 * 
 * Ce composant doit etre appliquée dans une paire de noms de classe aux composants enfants.
 * la première classe est sous forme de nom-etape et la deuxième classe est sous forme de nom-etape-active.
 * 
 * par expl : vous fournissez le fade de nom est quand il s'applique à l'étape enter les deux classes seront fade-enter et fade-enter-active
 * il peut prendre une prop comme Timeout qui définit le temps maximum d'animation
 * 
 * 
 * ------------TransitionGroup------------------------
 * Ce composant permet de gérer un ensemble de composants de transition (Transition et CSSTransition) dans une liste.
 * C'est une machine à états qui controle le montage et le démontage des composants dans le temps.
 * le composant Transition ne définit aucune animation diectement. Là la façon dont l'élément "liste" s'anime est basée sur le composant de transition individuel.
 * ==> le composant TransitionGroup peut avoir différentes animations au sein d'un meme composant
 */