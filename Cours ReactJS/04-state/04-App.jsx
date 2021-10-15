import React from 'react';
 

class App1 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            header : "Header de state ",
            footer : "Footer de state "
        }
    }
    render(){
        <div>
            <h1>
                {this.state.header}
            </h1>
            <h2>
                {this.state.footer}
            </h2>
        </div>
    }
}
export default App1;