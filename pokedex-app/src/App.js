import React from "react";
import { Container, Row } from "react-bootstrap";
import Pokemon from "./Components/Pokemon";

class App extends React.Component {
  state = {
    pokemon: {},
  };

  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const pokemonObject = { ...data.results };
    this.setState({ pokemon: pokemonObject });
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          {Object.keys(this.state.pokemon).map((key) => (
            <Pokemon
              key={key}
              index={key}
              name={this.state.pokemon[key].name}
              url={this.state.pokemon[key].url}
            ></Pokemon>
          ))}
        </Row>
      </Container>
    );
  }
}

export default App;
