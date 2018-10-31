import React from "react";
import GRADES from '../data/grades.json';
import Grade from './Grade';
import Nav from './Nav';
import Aside from './Aside';

class AppDict extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      kanji: {
        word: GRADES.grades[0][0],
        active: true
      }
    };
    this.changeGrade = this.changeGrade.bind(this);
    this.viewKanji = this.viewKanji.bind(this);
  }

  changeGrade(index) {
    this.setState({ index: index });
  }

  viewKanji(word) {
    let self = this;

    this.setState({
      kanji: { word: word, active: false }
    });

    setTimeout(() => {
      self.setState({ kanji: { active: true, word: word } });
    }, 100);
  }

  render() {
    const { index, kanji } = this.state;
    return (
      <div className="app-dict">
        <Aside kanji={this.state.kanji} />
        <div>
          <Nav onChangeGrade={this.changeGrade} />
          <Grade onViewKanji={this.viewKanji} index={index} kanji={kanji} />
        </div>
      </div>
    );
  }
}

export default AppDict;
