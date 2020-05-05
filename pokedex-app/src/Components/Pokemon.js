import React from "react";
import { Badge, Button, Col } from "react-bootstrap";
import editColor from "../Utilities/typeColors";

class Pokemon extends React.Component {
  render() {
    const { id, name, types } = this.props;
    const imageColor = types ? editColor(types[0], "original") : "white";
    const buttonColor = types ? editColor(types[0], "darken") : "white";
    const imageColorLight = types ? editColor(types[0], "lighten") : "white";
    const secondaryColor =
      types && types.length === 2 ? editColor(types[1], "original") : "white";

    return (
      <Col
        sm={12}
        md={5}
        className="d-flex border border-dark rounded shadow my-2 mx-2 px-0"
      >
        <img
          style={{ backgroundColor: imageColor }}
          className="w-25"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="pokemon"
        />
        <div
          style={{
            background: `linear-gradient(145deg, ${imageColor} 51%,${
              secondaryColor === "white" ? imageColorLight : secondaryColor
            } 51%)`,
          }}
          className="w-75 d-flex align-items-center"
        >
          <div className="d-flex flex-column align-items-start justify-content-center mr-auto">
            <h3 className="text-capitalize mb-0">{`#${id} ${name}`}</h3>
            <div>
              {types
                ? types.map((type) => <Badge key={type}>{type}</Badge>)
                : "loading"}{" "}
            </div>
            <Button style={{ backgroundColor: buttonColor }}>Stats!</Button>
          </div>
          <Button className="mr-3" style={{ backgroundColor: buttonColor }}>
            Catch!
          </Button>
        </div>
      </Col>
    );
  }
}

export default Pokemon;
