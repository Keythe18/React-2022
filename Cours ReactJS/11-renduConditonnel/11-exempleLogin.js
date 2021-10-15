import React from "react";

// Composant Message
function Message(props) {
  if (props.isLoggedIn) return <h1>Content de vous revoir!</h1>;
  else return <h1>Inscrivez-vous !</h1>;
}

//Composant Login
function Login(props) {
  return <button onClick={props.clickInfo}>Login</button>;
}

//Composant Logout
function Logout(props) {
  return <button onClick={props.clickInfo}>Logout</button>;
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin() {
    this.setState({ isLoggedIn: true });
  }
  handleLogout() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    return (
      <div>
        <h1>Rendu Conditionnel</h1>
        <Message isLoggedIn={this.state.isLoggedIn}></Message>
        {this.state.isLoggedIn ? (
          <Logout clickInfo={this.handleLogout} />
        ) : (
          <Login clickInfo={this.handleLogin} />
        )}
      </div>
    );
  }
}
export default App;
