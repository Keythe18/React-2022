import { TransitionGroup, CSSTransition } from "react-transition-group";
import React from "react";
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Javascript", "ReactJS", "TypeScript", "Angular"],
    };
    this.add = this.add.bind(this);
  }

  add() {
    const newItems = this.state.items.concat([prompt("Entrez le langage")]);
    this.setState({ items: newItems });
  }

  remove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <CSSTransition
        key={i}
        classNames="nomTransition"
        timeout={{ enter: 500, exit: 300 }}
      >
        <div key={item} onClick={() => this.remove(i)}>
          {item}
        </div>
      </CSSTransition>
    ));

    return (
      <div>
        <h1>Animation </h1>
        <button onClick={this.add}>Ajouter langage</button>
        <TransitionGroup>{items}</TransitionGroup>
      </div>
    );
  }
}
