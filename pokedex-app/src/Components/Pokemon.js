import React from "react";

class Pokemon extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.url}</p>
      </div>
    );
  }
}

export default Pokemon;
