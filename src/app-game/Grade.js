import React from "react";
import Letter from './Letter';
import GRADES from '../data/grades.json';

class Grade extends React.Component {
  render() {
    let grade = GRADES.grades[this.props.index];
    let gradeList = [];

    for (var i = 0; i < grade.length; i++) {
      let item = grade.charAt(i);
      if (item !== " ") {
        gradeList.push(<Letter value={item} key={i} onSelectKanji={this.props.onSelectKanji} />);
      }
    }

    return <div className="grade">{gradeList}</div>;
  }
}

export default Grade;