/**
 * ----------------Installation de React Router----------------------
 * react-router : il fournit les composants et les fonctions de routage de base pour les applications.
 * react-router-native : il est utilisé pour les applications mobile
 * react-router-dom : il est utilisé pour la conception d'applications web
 * 
 * => il n'est pas possible d'installer react-router directement dans l'application. pour l'utliser il faut d'abord installer les modules react-router-dom 
 * npm install react-router-dom --save
 * 
 * Il existe 2 types de composant de router :
 * <BrowserRouter> : il est utilisé pour gérer l'URL dynamique
 * <HashRouter> : il est utilisé pour la requete statique
 */

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/Informations" component={Informations} />
      <Route path="/Contact" component={Contact} />
    </div>
  </Router>
);
/**
 * si on navigue de la page d'accueil vers la page informations on voit toujours que la composante accueil est toujour rendu c'est parce que le chemin d'origine est "/" et le chemin d'accès est "/Informations" => la barre oblique est commune aux deux chemin qui rendent les 2 composants . Pour arreter ce comportement vous devez utiliser la props exact.
 */
const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/Informations" component={Informations} />
      <Route path="/Contact" component={Contact} />
    </div>
  </Router>
);
/**
 * --------------------<Link> Component -------------------
 * lorsqu'on a besoin de plusieurs  liens sur une seule page, quand on clique sur un de ces liens, la page associée à ce chemin d'accès doit etre recharger sans recharger la page web.
 * Pour ce faire on doit imorter le composant <Link> dans le fichier index.js
 * 
 * -------------<NavLink>-----------------------
 * Utilisé pour ajouter des styles aux URLs actives
 * 
 * ---------------React Router Switch -----------------------
 * Le composant <Switch></Switch> est utilisé pour rendre les composants uniquement lorsque le chemin d'accès est identique. Sinon il retourne un composant non trouvé
 * 
 * 
 * 
 */