import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      languages: [
        { name: "Javascript", votes: 0 },
        { name: "Java", votes: 0 },
        { name: "C#", votes: 0 },
        { name: "PHP", votes: 0 },
      ],
    };
  }

  vote(i) {
    let newLanguages = [...this.state.languages];
    newLanguages[i].votes++;
    this.setState({ languages: newLanguages });
  }
  render() {
    return (
      <>
        <h1>Votez pour votre langage préféré !</h1>
        <div className="languages">
          {this.state.languages.map((lang, i) => (
            <div key={i} className="language">
              <div className="voteCount">{lang.votes}</div>
              <div className="languageName">{lang.name}</div>
              <button onClick={this.vote.bind(this, i)}>Voter</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default App;
