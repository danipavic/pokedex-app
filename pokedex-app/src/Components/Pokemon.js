import React from "react";
import { Badge, Button, Col } from "react-bootstrap";

class Pokemon extends React.Component {
  render() {
    const { id, name } = this.props;
    return (
      <Col
        sm={12}
        md={5}
        className="d-flex border border-dark rounded shadow my-2 mx-2"
      >
        <img
          className="w-25"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt="pokemon"
        />
        <div className="w-75 d-flex align-items-center">
          <div className="d-flex flex-column align-items-start justify-content-center mr-auto">
            <h3 className="text-capitalize mb-0">{`#${id} ${name}`}</h3>
            <div className="mb-2">
              <Badge>Type1</Badge>
              <Badge>Type2</Badge>
            </div>
            <Button>Stats!</Button>
          </div>
          <Button style={{ backgroundColor: "red" }}>Catch!</Button>
        </div>
      </Col>
    );
  }
}

export default Pokemon;
