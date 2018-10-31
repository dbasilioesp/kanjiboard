import React from "react";

class Letter extends React.Component {
  render() {
    return (
      <span>{this.props.value}</span>
    );
  }
}

export default Letter;