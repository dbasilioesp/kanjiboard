import React from "react";

class Nav extends React.Component {
  handleClick(index) {
    this.props.onChangeGrade(index);
  }

  render() {
    return (
      <div className="nav">
        <button onClick={e => this.handleClick(0)}>01</button>
        <button onClick={e => this.handleClick(1)}>02</button>
        <button onClick={e => this.handleClick(2)}>03</button>
        <button onClick={e => this.handleClick(3)}>04</button>
        <button onClick={e => this.handleClick(4)}>05</button>
        <button onClick={e => this.handleClick(5)}>06</button>
      </div>
    );
  }
}

export default Nav;