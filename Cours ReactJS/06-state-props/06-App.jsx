import React from 'react';

class App extends React.Component {
constructor(props) {
    super (props);
    this.state = {

            header : "Header de state ",
            footer : "Footer de state "
        
    }
}
render() {
    return(
        <div>
        <Header headerProp = {this.state.header}/>
        <Footer footer = {this.state.footer}/>
        </div>
    );
}
}
class Header extends React.Component {
    render(){
        return (
            <div>
              <h1>{this.props.headerProp} </h1>
            </div>
        )
    }
}

class Footer extends React.Component {
    render(){
        return (
            <div>
              <h2> {this.props.footerProp}  </h2>
            </div>
        )
    }
}
export default App;