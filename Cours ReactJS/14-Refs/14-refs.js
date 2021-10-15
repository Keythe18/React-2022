/**
 * Refs : abréviation pour les références dans React.
 * similaire aux clés de React.
 * C'est un attribut qui permet de stocker une référence à des noeuds DOM particuliers ou à des éléments de React.
 * il fournit un moyen d'accéder aux noeuds DOM ou à des éléments de React et d'intéragir avec eux.
 * il est utilisé lorsqu'on veut modifier la valeur d'un composant enfant sans avoir recours à des props.
 * 
 * ----------Quand utiliser Refs----------------
 * -- lorsqu'on a besoin de mesures DOM telles que la gestion de la mise au point, la selection de texte ou la lecture de médias
 * --il est utilisé pour déclencher des animations impératives
 * -- lors de l'intégration avec des bibliothèques DOM tierces
 * -- il peut etre utilisé comme dans les callbacks
 * 
 *  ----------Quand ne pas utiliser Refs----------------
 * -- L'utilisation de refs doit etre évitée pour tout ce qui peut etre fait de manière déclarative. 
 * => par exemple au lieu d'utiliser les méthodes open() et close() sur un composant dialog, vous devez lui passer un prop isOpen
 * --vous devez éviter de TROP utiliser les Refs
 * 
 * Comment créer des Refs : 
 * En utilisant React.createRef()
 * il peut etre affecté aux éléments React via l'attribut ref.
 * il est généralement assigné à une proprieté d'instance lorsqu'un composant est créé et peut ensuite etre référencé dans tout le composant
 */
import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.callRef = React.createRef();
    }
    render() {
        return <div ref={this.callRef }/>
    }
}
/**
 * lorsqu'une ref est passée à un élément à l'interieur de la methode render() une référence au noeud peut etre accessible via l'attribut courant de ref
 * const node = this.callRef.current;
 * 
 * La valeur de ref diffère selon le type de noeud:
 * --Lorsque l'attribut ref est utilisé dans un élément html, la ref créée avec React.createRef() reçoit l'élément DOM sous-jacent comme proprieté courante.
 * -- si l'attribut ref est utilisé sur un composant personnalisé alor l'objet re reçoit l'instance montée du composant comme sa proprieté courante.
 * --L'attribut ref ne peut pas etre utilisé sur les composants de fontion car ils n'ont pas d'instance
 * 
 * ----------------Callback refs -----------------------
 * Il existe une autre façon d'utiliser les refs appelée "Callback refs" qui permet de mieux controler les refs lorsqu'ils sont activés et désactivés.
 * Au lieu de créer des refs par la méthode createRef(), React permet de créer des refs en passant une fonctionde callback à l'attribut ref d'un composant
 * <input type="text" ref= {element => this.callRefInput = element}/>
 * la fonction de rappel est utilisée pour stocker une référence au noeud DOM dans une proprieté de l'instance et peut etre accessible ailleurs
 * elle est accessible comme suit : this.callRefInput.value
 * 
 * ----------- Transmission de ref d'un composant à un autre composant---------------------
 * La transmission de références est utilisée pour faire passer une ref d'un composant à l'un de ses composants enfants.
 * Pour faire une transmission on utilise la méthode : React.forwardRef()
 * cette technique est particulièrement utile pour les composants d'ordre supérieur et est surtout utilisée dans les bibliothèques de composants réutilisables.
 * 
 * 
 -------------------useRef()-------------------
 il permet d'accéder au noeud ou l'élément DOM, on peut ensuite iteragir avec ce noeud ou cet élément DOM par exemple en mettant l'accent sur l'élément d'entrée ou en accédant à la valeur de l'élément d'entrée .
 Il renvoie l'objet ref dont la proprieté current est initialisée à l'argument passé.
 l'objet renvoyé persiste pendant toute la durée de vie du composant

 Syntaxe : const refContainer = useRef(initialValue)
 */
function useRefExemple () {
    const inputRef = useRef(null);
    const onButtonClick = () => {
        inputRef.current.focus();
    };
    return (
        <>
            <input ref={inputRef} type="text"/>
            <button onClick={onButtonClick}>Submit</button>

        </>
    )
}
/**
 * Dans cet exemple, useRef est une fonction qui est assigné à une variable,inputRef, puis attaché à un attribut ref à l'intérieur de l'élément HTML auquel on veut faire référence.
 */
 