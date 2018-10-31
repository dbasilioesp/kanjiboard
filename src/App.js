import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

const grade1 =
  "九 七 二 人 入 八 力 十 下 三 千 上 口 土 夕 大 女 子 小 山 川 五 天 中 六 円 手 文 日 月 木 水 火 犬 王 正 出 本 右 四 左 玉 生 田 白 目 石 立 百 年 休 先 名 字 早 気 竹 糸 耳 虫 村 男 町 花 見 貝 赤 足 車 学 林 空 金 雨 青 草 音 校 森";

const grade2 =
  "刀 万 丸 才 工 弓 内 午 少 元 今 公 分 切 友 太 引 心 戸 方 止 毛 父 牛 半 市 北 古 台 兄 冬 外 広 母 用 矢 交 会 合 同 回 寺 地 多 光 当 毎 池 米 羽 考 肉 自 色 行 西 来 何 作 体 弟 図 声 売 形 汽 社 角 言 谷 走 近 里 麦 画 東 京 夜 直 国 姉 妹 岩 店 明 歩 知 長 門 昼 前 南 点 室 後 春 星 海 活 思 科 秋 茶 計 風 食 首 夏 弱 原 家 帰 時 紙 書 記 通 馬 高 強 教 理 細 組 船 週 野 雪 魚 鳥 黄 黒 場 晴 答 絵 買 朝 道 番 間 雲 園 数 新 楽 話 遠 電 鳴 歌 算 語 読 聞 線 親 頭 曜 顔";

const grades = [grade1, grade2];

class Letter extends React.Component {
  render() {
    return (
      <span
        className={this.props.active}
        onClick={e => this.props.onViewKanji(this.props.value)}
      >
        {this.props.value}
      </span>
    );
  }
}

class Grade extends React.Component {
  render() {
    let grade = grades[this.props.index];
    let gradeList = [];

    for (var i = 0; i < grade.length; i++) {
      let kanji = grade.charAt(i);
      let isActive = this.props.kanji.word === kanji ? "active" : "";
      gradeList.push(
        <Letter
          onViewKanji={this.props.onViewKanji}
          value={kanji}
          active={isActive}
          key={i}
        />
      );
    }

    return <div className="grade grade-1">{gradeList}</div>;
  }
}

class Nav extends React.Component {
  handleClick(index) {
    this.props.onChangeGrade(index);
  }

  render() {
    return (
      <div className="nav">
        <button onClick={e => this.handleClick(0)}>01</button>
        <button onClick={e => this.handleClick(1)}>02</button>
      </div>
    );
  }
}

class Aside extends React.Component {
  render() {
    let { active, word } = this.props.kanji;
    let activeClass = active ? "active" : "";
    let className = "aside " + activeClass;

    return <aside className={className}>{word}</aside>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      kanji: {
        word: grades[0][0],
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
      <div className="app">
        <Aside kanji={this.state.kanji} />
        <div>
          <Nav onChangeGrade={this.changeGrade} />
          <Grade onViewKanji={this.viewKanji} index={index} kanji={kanji} />
        </div>
      </div>
    );
  }
}

export default App;
