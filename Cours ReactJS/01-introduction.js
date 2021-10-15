/**
 * React une biblio qui permet de construire des interfaces utilisateur composables
 * 
 * -Caractéristiques :
 * JSX : c'est une extension de la syntaxe Javascript
 * Composants
 * Flux et flux de données unidirectionnels : le flux est un schéma qui permet de garder vos données unidirectionnelles
 * Licence : React et sous license de Facebook Inc
 * 
 * Avantages : 
 * - Utilise le DOM virtuel qui est un objet Javascript => ça améliore les performances des applications car le DOM virtuel Javascript est plus rapide que le DOM normal
 * - Peut etre utilisé coté client et coté serveur ainsi qu'avec d'autres frameworks
 * - Les composants et les modèles de données améliorent la lisibilité => ce qui permet de maintenir des apps plus volumineuses
 * 
 * Limites:
 * - Ne couvre que la couche d'affichage de l'application
 * 
 * *********Mise en place de l'environnement***************
 * ----Utilisation de Webpack et Babel ---------------
 * Webpack : est un module bundler(gestion et chargement de modules indepandants)
 * => on le configurer à l'aide dufichier webpack.config
 * Babel : est un compilateur Javascript. il est utilisé pour convertir un code source en un autre.
 * on peut utiliser les nouvelles fonctionnalités de l'ES6 dans le code où babel le convertit 
 * en un simple ES5 qui peut etre executé sur tous les navigateurs.
 * 
 * Etape 1 : Créer un dossier racine 
 * C:\Users\marwa\Desktop>mkdir applicationreact
 * C:\Users\marwa\Desktop>cd applicationreact
 * => ensuite après la création du dossier, il est nécessaire de générer le fichier package.json , pour ce faire faut lancer la commande npm init
 * C:\Users\marwa\Desktop\applicationreact>npm init
 * => cette commande demande des infos sur le module telles que le nom, la description, l'auteur ...
 * vous pouvez les ignorer en utilisant l'option -y : npm init -y
 * Etape 2 :Installer ReactJS et ses paquets DOM 
 * C:\Users\marwa\Desktop\applicationreact>npm install react --save
 * C:\Users\marwa\Desktop\applicationreact>npm install react-dom --save
 * Etape 3: Installer le Webpack:
 * C:\Users\marwa\Desktop\applicationreact>npm install webpack --save
 * C:\Users\marwa\Desktop\applicationreact>npm install webpack-dev-server --save
 * C:\Users\marwa\Desktop\applicationreact>npm install webpack-cli --save
 * Ou bien : C:\Users\marwa\Desktop\applicationreact>npm install webpack webpack-dev-server webpack-cli --save7
 * Etape 3: Installer Babel:
 * C:\Users\marwa\Desktop\applicationreact>npm install babel-core --save-dev
 * C:\Users\marwa\Desktop\applicationreact>npm install babel-loader --save-dev
 * C:\Users\marwa\Desktop\applicationreact>npm install babel-preset-env --save-dev
 * C:\Users\marwa\Desktop\applicationreact>npm install babel-preset-react --save-dev
 * C:\Users\marwa\Desktop\applicationreact>npm install html-webpack-plugin --save-dev
 * Etape 4 création des fichiers:
 * C:\Users\marwa\Desktop\applicationreact>type nul>index.html
 * C:\Users\marwa\Desktop\applicationreact>type nul>App.js
 * C:\Users\marwa\Desktop\applicationreact>type nul>main.js
 * C:\Users\marwa\Desktop\applicationreact>type nul>webpack.config.js
 * C:\Users\marwa\Desktop\applicationreact>type nul>.babel.rc
 * faut modifier le fichier webpack-config.js
 * modifier le package.json : supprimer la ligne "test" "echo `"Error: no test...
 * "start" : "webpack-dev-server --mode developement --open --hot"
 * "build" : "webpack --mode production"
 * deuxième méthode : En utilisant la commande create-react-app 
 * C:\Users\marwa\Desktop>npx create-react-app projetreactapp
 */