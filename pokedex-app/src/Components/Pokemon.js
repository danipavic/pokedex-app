import React from "react";
import { Badge, Button, Col } from "react-bootstrap";
import getTypeColor from "../Utilities/typeColors";
import PokemonModal from "./pokemonModal";

class Pokemon extends React.Component {
  render() {
    const {
      id,
      name,
      types,
      abilities,
      species,
      height,
      weight,
      description,
      stats,
    } = this.props;

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
    const primaryButtonBackgroundColor = getTypeColor(types[0], "darken");
    const secondaryButtonBackgroundColor =
      types.length === 2
        ? getTypeColor(types[1])
        : getTypeColor(types[0], "darken");
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
        className="d-flex border border-dark rounded my-2 mx-2 px-0"
        style={{ boxShadow: "rgba(5, 5, 5, 0.5) 4px 3px 4px 1px" }}
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
            <h4 className="text-capitalize text-white my-2">{`#${id} ${name}`}</h4>
            <div>
              {types.map((type) => (
                <Badge
                  className="text-capitalize text-white p-2 mr-2 mb-2"
                  style={{
                    backgroundColor: primaryButtonBackgroundColor,
                    borderColor: primaryButtonBackgroundColor,
                    boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)",
                  }}
                  key={type}
                >
                  {type}
                </Badge>
              ))}
            </div>
            <PokemonModal
              {...{
                id,
                name,
                types,
                getGradientColor,
                primaryBackgroundColor,
                primaryButtonBackgroundColor,
                secondaryButtonBackgroundColor,
                abilities,
                height,
                weight,
                description,
                stats,
                species,
              }}
            />
          </div>
          <Button
            className="mr-3"
            style={{
              backgroundColor: primaryButtonBackgroundColor,
              borderColor: primaryButtonBackgroundColor,
              boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)",
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
