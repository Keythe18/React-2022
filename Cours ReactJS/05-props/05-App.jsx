import React from 'react';

class App extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.headerProp}</h1>
                <h2>{this.props.footerProp}</h2>
            </div>
        )
    }
}
App.defaultProps = {
    headerProp : "Header de props ",
    footerProp : "Footer de props " 
}
export default App;
