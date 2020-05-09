import React from "react";
import { Container, Row } from "react-bootstrap";
import Pokemon from "./Components/Pokemon";
import getPokemonId from "./Utilities/getPokemonId";

class App extends React.Component {
  state = {
    pokemon: {},
    selectedLetter: "",
  };
  getAllPokemons = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    const data = await response.json();
    const pokemonObject = {};
    data.results.forEach((pokemon) => {
      const id = getPokemonId(pokemon.url);
      pokemonObject[id] = { ...pokemon, id };
    });
    this.setState({ pokemon: pokemonObject });
  };

  getPokemonType = async () => {
    const { pokemon } = this.state;
    Object.keys(pokemon).forEach(async (key) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
      const data = await response.json();
      const types = [];
      data.types.forEach((type) => {
        return types.push(type.type.name);
      });
      pokemon[key].types = types;
      this.setState({ pokemon });
    });
  };

  async componentDidMount() {
    await this.getAllPokemons();
    await this.getPokemonType();
  }

  render() {
    const { pokemon, selectedLetter } = this.state;
    return (
      <Container>
        <Row className="justify-content-center">
          {Object.values(pokemon)
            .filter(({ name }) => name.startsWith(selectedLetter))
            .map(({ url, name, id, types }) => (
              <Pokemon key={id} {...{ url, name, id, types }} />
            ))}
        </Row>
      </Container>
    );
  }
}

export default App;
