import React from "react";
import KANJIS from '../data/kanji.json';
const KANJISDICT = KANJIS.kanji;

class Aside extends React.Component {

  getMeaning(word) {
    let kanji = KANJISDICT.find(o => o.character === word);
    if (kanji) {
      return kanji.meaning;
    } else {
      return ''
    }
  }

  render() {
    let { active, word } = this.props.kanji;
    let activeClass = active ? "active" : "";
    let className = "aside " + activeClass;
    let meaning = this.getMeaning(word);

    let buttonText = "Começar";

    if (this.props.gameStarted) {
      buttonText = this.props.timer;
    }

    return (
      <aside className={className}>
        <div className="aside__word">{word}</div>
        <div className="aside__meaning">{meaning}</div>
        <button className="aside__button" onClick={e => this.props.onStartGame()}>{buttonText}</button>
      </aside>
    );
  }
}

export default Aside;