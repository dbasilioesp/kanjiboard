import React from "react";

class Letter extends React.Component {
  render() {
    return (
      <span
        className={this.props.active}
        onClick={e => this.props.onSelectKanji(this.props.value)}
      >{this.props.value}</span>
    );
  }
}

export default Letter;