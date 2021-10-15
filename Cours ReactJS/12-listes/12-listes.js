/**
 * Les listes sont utilisées pour afficher des données dans un format ordonné et servent principalement à afficher des menus sur les sites web.
 * 
 * La fonction map() est utilisée pour parcourir les listes
 */
function App() {
    var nbs = [1,2,3,4,5];
    const multiplier = nbs.map((nb) => {return (nb * 2)});
    console.log(multiplier);
}

function App1(){
    const maListe = ['a', 'b','c','d'];
    const items = maListe.map((maListe)=> {
        return <li>{maListe}</li>;
    });
     return items;
}