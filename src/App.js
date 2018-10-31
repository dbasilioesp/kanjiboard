import React from "react";
import AppDict from "./app-dict/AppDict";
import AppGame from "./app-game/AppGame";

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <AppGame />
      </div>
    );
  }
}

export default App;
