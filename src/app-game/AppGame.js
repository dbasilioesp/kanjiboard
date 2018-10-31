import React from "react";
import GRADES from '../data/grades.json';
import Grade from './Grade';
import Nav from './Nav';
import Aside from './Aside';

const TIME = 5;

class AppGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      timer: TIME,
      index: 0,
      kanji: {
        word: GRADES.grades[0][0],
        active: true
      }
    };

    this.onStartGame = this.onStartGame.bind(this);
    this.onSelectKanji = this.onSelectKanji.bind(this);
  }

  onSelectKanji(item) {
    if (this.gameStarted) {
      // Start from here
    }
  }

  startTimer() {
    let self = this;

    if (self.state.timer === 0) {
      self.setState({ gameStarted: false, timer: TIME });
      return;
    }

    setTimeout(() => {
      self.setState({ timer: self.state.timer - 1 });
      self.startTimer();
    }, 1000);
  }

  onStartGame() {
    this.setState({ gameStarted: true });
    this.startTimer();
  }

  render() {
    const { index, kanji } = this.state;
    return (
      <div className="app-dict">
        <Aside
          onStartGame={this.onStartGame}
          kanji={this.state.kanji}
          timer={this.state.timer}
          gameStarted={this.state.gameStarted}
        />
        <div>
          <Grade index={index} kanji={kanji} onSelectKanji={this.onSelectKanji} />
        </div>
      </div>
    );
  }
}

export default AppGame;
