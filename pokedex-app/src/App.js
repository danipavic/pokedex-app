import React from "react";
import { Container, Row } from "react-bootstrap";
import Pokemon from "./Components/Pokemon";
import getPokemonId from "./Utilites/getPokemonId";

class App extends React.Component {
  state = {
    pokemon: {},
    selectedLetter: "",
  };

  async componentDidMount() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
    const data = await response.json();
    const pokemonObject = {};
    data.results.forEach((pokemon) => {
      const id = getPokemonId(pokemon.url);
      pokemonObject[id] = { ...pokemon, id };
    });
    this.setState({ pokemon: pokemonObject });
  }

  render() {
    const { pokemon, selectedLetter } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">
          {Object.values(pokemon)
            .filter(({ name }) => name.startsWith(selectedLetter))
            .map(({ url, name, id }) => (
              <Pokemon key={id} {...{ url, name, id }} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default App;
