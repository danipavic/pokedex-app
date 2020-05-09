import React from "react";
import { Modal, Button } from "react-bootstrap";
import getTypeColor from "../Utilities/typeColors";

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
    const { types } = this.props;
    const buttonBackgroundColor = getTypeColor(types[0], "darken");
    return (
      <div>
        <Button
          style={{
            backgroundColor: buttonBackgroundColor,
            borderColor: buttonBackgroundColor,
            boxShadow: "1px 2px 10px 1px rgba(0,0,0,0.5)",
          }}
          onClick={this.handleShow}
        >
          Stats
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <h1>{types[1]}</h1>
          <h1>{types[0]}</h1>
          <Button onClick={this.handleClose}>Close me</Button>
        </Modal>
      </div>
    );
  }
}
export default PokemonModal;
