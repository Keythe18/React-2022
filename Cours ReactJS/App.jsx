import React from 'react';
class App extends React.Component {
    render() {
        var x = 1;
        var objStyle = {
            fontSize: 50,
            color: '#f0f8ff'
        }
        return (          
        <div>
        <h1>en-tete</h1>
        <h2>contenu</h2>
        <p>Bonjour tout le monde</p>  
        
        <h3>utilisation des attributs personnalisés</h3>
        <p data-attr ="valeur"> le contenu de p</p>
        <h3> { 2 + 15 }</h3>
        <h2>{x == 1 ? 'true' : 'false'}</h2>
        <h1 style = {objStyle}> Texte Style</h1>
     
        {/*un commentaire sur plusieurs lignes */}
        <Header></Header>
        <Footer></Footer>

        </div>

        );
    }
}
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}
class Footer extends React.Component {
    render(){
        return (
            <div>
                <h1>Footer</h1>
            </div>
        )
    }
}
export default App;