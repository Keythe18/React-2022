import styled from "styled-components";
import React from "react";

class App extends React.Component {
  render() {
    const Div = styled.div`
  margin: 20px,
  border: 5px dashed green;
  &:hover {
    background-color: ${(props) => props.hoverColor}
  }
  `;
    const Title = styled.h1`
      font-family: Arial;
      font-size: 40px;
      text-align: center;
      color: red;
    `;
    const Pragraph = styled.p`
      font-size: 20px;
      text-align: center;
      color: blue;
    `;
    return (
      <div>
        <Title>Exemple Styled-Components</Title>
        <p></p>
        <Div hoverColor="yellow">
          <Pragraph>Bonjour</Pragraph>
        </Div>
      </div>
    );
  }
}
export default App;
