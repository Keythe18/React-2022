import React from 'react';

class App1 extends React.Component {

    constructor(){
        super();
        this.users = {
            data: 
            [
                {
                    "id":1,
                    "nom": "toto",
                    "age":"12"
                },
                  {
                    "id":2,
                    "nom": "toto1",
                    "age":"15"
                },
                  {
                    "id":3,
                    "nom": "toto3",
                    "age":"16"
                },
            ]
        }
    }
    render()
    {
        return (
            <div>
                <Header></Header>
                <table>
                    <tbody>
                        {this.users.data.map((user, i) => <LigneTableau key = {i} data ={user} />)}
                    </tbody>
                </table>
            </div>
        )
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
    class LigneTableau  extends React.Component {
        render() {
            return (
                <tr>
                   <td>{this.props.data.id}</td> 
                    <td>{this.props.data.nom}</td> 
                     <td>{this.props.data.age}</td> 
                </tr>
            );
        }
    }

export default App1;
