import React from "react";
import { Badge, Button, Col } from "react-bootstrap";
import getTypeColor from "../Utilities/typeColors";
import PokemonModal from "./pokemonModal";

class Pokemon extends React.Component {
  render() {
    const { id, name, types } = this.props;

    if (!types) {
      return (
        <Col
          sm={12}
          md={5}
          className="d-flex border border-dark rounded my-2 mx-2 px-0"
        >
          <div className="w-25" style={{ height: 120 }} />
          <div className="w-75 d-flex align-items-center bg-cyan">
            <h2>Loading...</h2>
          </div>
        </Col>
      );
    }
    const buttonBackgroundColor = getTypeColor(types[0], "darken");
    const primaryBackgroundColor = getTypeColor(types[0]);
    const secondaryBackgroundColor =
      types.length === 2
        ? getTypeColor(types[1])
        : getTypeColor(types[0], "lighten");

    const getGradientColor = () =>
      `linear-gradient(145deg, ${primaryBackgroundColor} 51%,${secondaryBackgroundColor} 51%)`;

    return (
      <Col
        sm={12}
        md={5}
        className="d-flex border border-dark rounded shadow-lg my-2 mx-2 px-0"
        style={{ boxShadow: "1px 2px 10px 1px rgba(0,0,0,0.5)" }}
      >
        <img
          style={{ backgroundColor: primaryBackgroundColor }}
          className="w-25"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="pokemon"
        />
        <div
          style={{
            background: getGradientColor(),
          }}
          className="w-75 d-flex align-items-center"
        >
          <div className="d-flex flex-column align-items-start justify-content-center mr-auto">
            <h3 className="text-capitalize mb-0">{`#${id} ${name}`}</h3>
            <div>
              {types.map((type) => (
                <Badge className="text-capitalize" key={type}>
                  {type}
                </Badge>
              ))}
            </div>
            <PokemonModal types={types} />
          </div>
          <Button
            className="mr-3"
            style={{
              backgroundColor: buttonBackgroundColor,
              borderColor: buttonBackgroundColor,
              boxShadow: "1px 2px 10px 1px rgba(0,0,0,0.5)",
            }}
          >
            Catch!
          </Button>
        </div>
      </Col>
    );
  }
}

export default Pokemon;
