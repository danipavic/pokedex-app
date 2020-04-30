import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Badge } from "react-bootstrap";

class Pokemon extends React.Component {
  pokemonIndex = parseInt(this.props.index) + 1;

  render() {
    return (
      <Col
        sm={12}
        md={5}
        className="d-flex border border-dark rounded shadow my-2 mx-2"
      >
        <img
          className="w-25"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.pokemonIndex}.png`}
          alt="pokemon"
        />
        <div className="w-75 d-flex align-items-center">
          <div className="d-flex flex-column align-items-start justify-content-center mr-auto">
            <h3 className="text-capitalize">{`#${this.pokemonIndex} ${this.props.name}`}</h3>
            <div>
              <Badge>Type1</Badge>
              <Badge>Type2</Badge>
            </div>
            <Button>Stats!</Button>
          </div>
          <Button className="h-50">Catch!</Button>
        </div>
      </Col>
    );
  }
}

export default Pokemon;
