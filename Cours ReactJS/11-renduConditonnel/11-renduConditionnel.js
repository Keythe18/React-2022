/**
 * Dans React on peut créer de multiples composants qui encapsulent les comportements dont on a besoin. Ensuite on peut les rendre en fonction de certaines conditions ou de l'état de l'application.
 * ==> en fonction d'une ou plusieurs conditions un composant déide des éléments qu'il va renvoyer.
 * Exemple connexion/déconnexion :
 * le bouton connexion et le bouton déconnexion sont 2 composants séparés.
 * si un utilisateur est connecté on rend le composant déconnexion pour pouvoir afficher le bouton déconnexion
 *  si un utilisateur est déconnecté on rend le composant connexion pour pouvoir afficher le bouton connexion
 * 
 * -if
 * -opérateur ternaire
 * opérateur logique &&
 * switch case 
 * rendu conditionnel avec enums
 * ----------------if---------------------------*/
 function UserLogIn (props) {
    return <h1>Content de vous revoir!</h1>
}
function GuestLogIn (props) {
    return <h1>Inscrivez-vous !</h1>
}
function App(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
            return <UserLogin></UserLogin>
    } 
    return
            <GuestLogin></GuestLogin>
}
ReactDOM.render(
    <App isLoggedIn = {false}/>,
    document.getElementById('root')
);
 /* ---------------------opérateur ternaire-----------------
 * on l'utilise où deux blocs alternent sous certaines conditions
 * rend le if-else plus concis
 * il prend trois opérandes
 * Syntaxe : condition ? true : false
 * 
 * * ---------------------switch case-----------------
 * Il est possible d'avoir plusieurs rendus conditionnels. Dans le cas du Switch, le rendu conditionnel est appliqué sur la base d'un état différent.
 *
 */
/*
---------------L'opérateur Logique &&------------------------
=> utilisé pour vérifier l'état. Si la condition est vraie, il renvoie l'élément juste après '&&' et si elle est fausse, React ignore et saute l'élément
Syntaxe :
{
    condition && //....
}
Exemple :
*/
('Lundi' == 'lundi') && alert('cette alerte ne va pas etre affichée');
// dans ce cas il va évaluer la condition "('Lundi' == 'lundi')" comme fausse donc le message d'alerte ne va pas s'afficher 
(2 > 1) && alert('cette alerte va etre affichée') // dans ce cas il va évaluer la condition "(2 > 1)" comme vrai donc le message d'alerte va s'afficher 
 function App ({text}) {
     switch (text) {
         case 'Bonjour' : return <p text= {text}/>
          case 'Bonne nuit' : return <p text= {text}/>
          default : 
          return null;
     }
 }
 
/**
 * ----------------rendu conditionnel avec enums-----------
 * pour avoir un rendu conditionnel multiple : il est plus lisible que l'opérateur Switch Case
 * il est parfait pour le mappage entre différents états
 * il est parfait pour le mappage dans plus d'une condition
 */
function App({text , state}) {
    return (
        <div>
            {{
                info: <Message text={text}/>,
                warning: <Message text={text}/>,
                error: <Message text={text}/>,

            }[state]}
        </div>
    )
}