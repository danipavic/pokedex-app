import React from "react";
import { Modal, Button, Container, Row, Col, Badge } from "react-bootstrap";

class PokemonModal extends React.Component {
  state = {
    show: false,
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    const {
      types,
      getGradientColor,
      id,
      name,
      species,
      description,
      abilities,
      height,
      weight,
      stats,
      primaryBackgroundColor,
      primaryButtonBackgroundColor,
      secondaryButtonBackgroundColor,
    } = this.props;

    const badgeTypeWidth = types.length === 2 ? "w-50" : "w-100";
    const statsSum = Object.values(stats).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    const overallStats = Math.floor(statsSum / 6);

    return (
      <div>
        <Button
          className="mb-2"
          style={{
            backgroundColor: primaryButtonBackgroundColor,
            borderColor: primaryButtonBackgroundColor,
            boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)",
          }}
          onClick={this.handleShow}
        >
          Stats
        </Button>
        <Modal show={this.state.show} size="lg" onHide={this.handleClose}>
          <Container>
            <Row className="show-grid">
              <Col className="p-2" sm={12}>
                <div
                  className="d-flex border border-dark rounded"
                  style={{ boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)" }}
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
                    </div>
                    <div className="d-flex flex-column align-items-start justify-content-center ">
                      <Button
                        className="m-3"
                        style={{
                          backgroundColor: primaryButtonBackgroundColor,
                          borderColor: primaryButtonBackgroundColor,
                          boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)",
                        }}
                      >
                        Catch!
                      </Button>

                      <Button
                        className="m-3"
                        style={{
                          backgroundColor: primaryButtonBackgroundColor,
                          borderColor: primaryButtonBackgroundColor,
                          boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)",
                        }}
                        onClick={this.handleClose}
                      >
                        Close
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col className="p-2" sm={12}>
                <div className="d-flex">
                  <div className="d-flex-column w-50">
                    <Badge
                      className="w-100 border rounded p-2 mb-1"
                      style={{
                        borderColor: primaryButtonBackgroundColor,
                        boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)",
                      }}
                    >
                      {species}
                    </Badge>
                    <h5 className="text-muted font-weight-light text-center">
                      Species
                    </h5>
                  </div>

                  <div className="w-50 d-flex">
                    {types.map((type, index) => {
                      const typeBackgroundColor =
                        index === 0
                          ? primaryButtonBackgroundColor
                          : secondaryButtonBackgroundColor;

                      return (
                        <div
                          key={type}
                          className={`d-flex-column ${badgeTypeWidth}`}
                        >
                          <Badge
                            className="border rounded text-capitalize text-white w-100 p-2 mb-1"
                            style={{
                              backgroundColor: typeBackgroundColor,
                              borderColor: typeBackgroundColor,
                              boxShadow: "0px 1px 4px 0px rgba(5,5,5,0.15)",
                            }}
                          >
                            {type}
                          </Badge>
                          <h5 className="text-muted font-weight-light text-center">
                            {index === 0 ? "Primary Type" : "Secondary Type"}
                          </h5>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <hr />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col className="p-2" sm={12}>
                <p className="mb-1">{description}</p>
                <h5 className="text-muted font-weight-light text-center">
                  Pokedex entry
                </h5>
                <hr />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col className="p-2" sm={12}>
                <div className="d-flex justify-content-around">
                  <div className="d-flex-column">
                    <p className="mb-1 text-center">{height}</p>
                    <h5 className="text-muted font-weight-light text-center">
                      Height
                    </h5>
                  </div>
                  <div className="d-flex-column">
                    <p className="mb-1 text-center">{weight}</p>
                    <h5 className="text-muted font-weight-light text-center">
                      Weight
                    </h5>
                  </div>
                </div>
                <hr />
              </Col>
            </Row>
            <Row className="show-grid">
              <Col className="p-2" sm={12}>
                <div>
                  <h2>Abilities</h2>
                  <div className="d-flex flex-column">
                    {abilities.map((ability) => {
                      return (
                        <Badge
                          key={ability}
                          style={{
                            backgroundColor: primaryButtonBackgroundColor,
                            borderColor: primaryBackgroundColor,
                          }}
                          className="text-capitalize mb-1 disabled p-3 text-white"
                        >
                          {ability}
                        </Badge>
                      );
                    })}
                  </div>
                  <hr />
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col className="p-2" sm={12}>
                <h2>Stats</h2>
                <div className="mr-1">
                  {Object.entries(stats).map(([key, value]) => {
                    return (
                      <div className="d-flex justify-content-end" key={key}>
                        <p className="text-capitalize">{key}</p>
                        <div
                          className="progress w-50 ml-3"
                          style={{ height: "30px" }}
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{
                              width: `${value}%`,
                              backgroundColor: primaryButtonBackgroundColor,
                            }}
                            aria-valuenow={value}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          >
                            {value}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="d-flex justify-content-end">
                    <p>Overall stats</p>
                    <div
                      className="progress w-50 ml-3"
                      style={{ height: "30px" }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${overallStats}%`,
                          backgroundColor: primaryButtonBackgroundColor,
                        }}
                        aria-valuenow={overallStats}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {overallStats}
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal>
      </div>
    );
  }
}
export default PokemonModal;
