import React from "react";

class Pokemon extends React.Component {
  photoIndex = parseInt(this.props.index) + 1;

  render() {
    return (
      <div>
        <img src={require(`../sprites/${this.photoIndex}.png`)} alt="pokemon" />
        <p>{this.props.name}</p>
        <p>{this.props.url}</p>
      </div>
    );
  }
}

export default Pokemon;
