import React from "react";
import Letter from './Letter';
import gradesJson from '../data/grades.json';

class Grade extends React.Component {
  render() {
    let grade = gradesJson.grades[this.props.index];
    let gradeList = [];

    for (var i = 0; i < grade.length; i++) {
      let item = grade.charAt(i);
      if (item !== " ") {
        let isActive = this.props.kanji.word === item ? "active" : "";
        gradeList.push(<Letter
          onViewKanji={this.props.onViewKanji}
          value={item}
          active={isActive}
          key={i}
        />);
      }
    }

    return <div className="grade grade-1">{gradeList}</div>;
  }
}

export default Grade;