import React from "react";
import kanjiJson from '../data/kanji.json';
const kanjidict = kanjiJson.kanji;

class Aside extends React.Component {
  getMeaning(word) {
    let kanji = kanjidict.find(o => o.character === word);

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

    return (
      <aside className={className}>
        <div className="aside__word">{word}</div>
        <div className="aside__meaning">{meaning}</div>
      </aside>
    );
  }
}

export default Aside;