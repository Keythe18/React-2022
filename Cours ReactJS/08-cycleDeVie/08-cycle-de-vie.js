/**
 * Dans ReactJS, chaque processus de création de composants fait intervenir des méthodes de cycle de vie
 * le cycle de vie d'un composant est divisé en quatre phases :
 * phase initiale
 * phase de montage
 * phase de mise à jour 
 * phase de démontage
 * 
 * -----------phase initiale---------
 * => c'est la phase de naissance de cycle de vie d'un composant
 * dans cette phase le compoosant contient les props par défaut et l'état initial , ces props par défaut se font dans le constructeur
 * elle ne se produit qu'une seule fois
 * elle consiste en les méthodes suivantes:
 * --getDefaultProps() : est utilisée pour spécifier la valeur par défaut de this.props .
 * invoqué avant que la création du composant ou tout props du parent ne lui soit transmis
 * --getInitialState() :  est utilisée pour spécifier la valeur par défaut de this.state
 * invoqué avant la création du composant
 * 
 * ------------phase de montage (Mounting phase) -------------
 * Dans cette phase, l'instance d'un composant est créée et insérée dans le DOM.
 * elle consiste en les méthodes suivantes:
 * --componentWillMount():  invoquée immédiatement après qu'un composant ne soit rendu au DOM.
 * si on appelle le setState() dans cette méthode le composant ne soit pas rendu
 * --componentDidMount(): invoquée immédiatement après qu'un composant a été rendu et placé sur le DOM
 * --render(): est définie dans chacunes des composantes React. elle est chargée de renvoyer un seul élément de noeud HTML racine.
 * si vous ne voulez rien rendre, vous pouvez renvoyer une valeur nulle ou fausse
 *  
 * ---------------phase de mise à jour --------------
 * dans cette phase qui suit la phase de montage, on obtient de nouveaux props et on change de state.
 * cette phase permet de gérer l'interaction avec l'utilisateur et d'assurer la communication avec la hiérarchie des composants.
 * son objectif principal est de s'assurer que le composant affiche la dernière version de lui meme.
 * cette phase se répète plusieurs fois contrairement à la phase de naissance ou de décès.
 * elle consiste en les méthodes suivantes:
 * --componentWillRecieveProps(): méthode invoquée lorsqu'un composant reçoit de nouveaux props.
 * si on veut mettre à jour le state en réponse à des changements de props , on doit comparer this.props et nextProps pour effectuer la transition d'état en utilisant la méthode this.state()
 * --shouldComponentUpdate(): méthode invoquée lorsqu'un composant décide de toute modification DOM.
 * elle permet de controler le comportement du composant lors de sa mise à jour.
 * si elle retourne true, le composant se mettra à jour sinon le composant sautera la mise à jour.
 * --componentWillUpdate(): méthode invoquée juste avant la mise à jour du composant.
 * ici on ne peut pas changer l'état du composant en invoquant la méthode setState().
 * la méthode ne sera pas appelée si shouldComponentUpdate() renvoie false.
 * --render(): invoquée pour examiner this.props et this.state et renvoyer l'un des types suivants : Elements React, tableaux et fragments, Boolean, NULL , Chaine de caratère et number.
 * si shouldComponentUpdate() renvoie false, le code dans render() sera invoqué à nouveau pour s'assurer que le composant s'affiche correctement
 * --componentDidUpdate() : méthode invoquée immédiatement après la mise à jour du composant
 * dans cette méthode on peut y mettre n'importe quel code qu'on souhaite executer une fois la mise à jour effectuée.
 * 
 * ---------------phase de démontage-----------------
 * la phase finale du cycle de vie des composants de React.
 * est appelée lorsqu'une instance de composant est détruite et démontée du DOM 
 * --componentWillUnmount(): la méthode est invoquée immédiatement avant qu'un composant soit détruit et démonté d'une façon permanente.
 * permet d'effectuer toutes taches de nettoyage nécessaire, comme l'invalidation des minuteries, l'écoute des événements, l'annulation des demandes de réseau ... 
 * Si une instance de composant est démontée , on ne peut la remonter.
 */