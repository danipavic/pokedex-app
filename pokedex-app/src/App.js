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

  getPokemonData = async () => {
    const { pokemon } = this.state;

    Object.keys(pokemon).forEach(async (key) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
      const data = await response.json();
      const types = [];
      const abilities = [];
      let stats = {};
      data.types.forEach((type) => {
        types.push(type.type.name);
      });

      data.stats.forEach((stat) => {
        stats = { ...stats, [stat.stat.name]: stat.base_stat };
      });

      data.abilities.forEach((ability) => {
        abilities.push(ability.ability.name);
      });

      pokemon[key] = {
        ...pokemon[key],
        height: data.height,
        weight: data.weight,
        types,
        abilities,
        stats,
      };

      this.setState({ pokemon });
    });
    Object.keys(pokemon).forEach(async (key) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${key}`
      );
      const data = await response.json();

      pokemon[key] = {
        ...pokemon[key],
        species: data.genera[2].genus,
        description: data.flavor_text_entries[1].flavor_text,
      };
      this.setState({ pokemon });
    });
  };

  async componentDidMount() {
    await this.getAllPokemons();
    await this.getPokemonData();
  }

  render() {
    const { pokemon, selectedLetter } = this.state;
    return (
      <Container
        className="py-4"
        fluid
        style={{ border: "15px solid crimson", backgroundColor: "lightsalmon" }}
      >
        <Row className="justify-content-center">
          {Object.values(pokemon)
            .filter(({ name }) => name.startsWith(selectedLetter))
            .map(
              ({
                url,
                name,
                id,
                types,
                species,
                description,
                stats,
                abilities,
                height,
                weight,
              }) => (
                <Pokemon
                  key={id}
                  {...{
                    url,
                    name,
                    id,
                    types,
                    species,
                    description,
                    stats,
                    abilities,
                    height,
                    weight,
                  }}
                />
              )
            )}
        </Row>
      </Container>
    );
  }
}

export default App;
