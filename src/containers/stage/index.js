import React, { Component } from "react";
import { StageStyled } from "./styles";

export default class Stage extends Component {
  state = {
    inputValue: "",
    charList: []
  };

  handleOnChange(val) {
    const { charList } = this.state;
    const { word } = this.props;
    let newCharList = charList.map((obj, i) => {
      const char = val[i];
      if (char === obj.char) {
        obj.correct = true;
      } else {
        obj.correct = false;
      }
      return obj;
    });
    this.setState({ charList: newCharList, inputValue: val }, () => {
      if (val === word) {
        this.handleCorrect();
      }
    });
  }

  setArray() {
    const { word } = this.props;
    let array = [];
    for (let index = 0; index < word.length; index++) {
      const char = word[index];
      array.push({ char, correct: false });
    }
    return array;
  }

  handleCorrect() {
    this.setState({ loaded: false, inputValue: "" }, () => {
      this.props.handleOnCorrect();
    });
  }

  componentDidMount() {
    this.updateWord();
    document.getElementById("input-word").focus();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.word !== this.props.word) {
      this.updateWord();
    }
  }

  updateWord = () => {
    const { word } = this.props;
    this.setState({
      charList: this.setArray(word)
    });
  };

  render() {
    const { charList, inputValue } = this.state;
    return (
      <StageStyled {...this.props}>
        <div className="content">
          <div className="word-wrapper" id="word-wrapper">
            {charList.map(({ char, correct }, i) => {
              return (
                <span className={correct ? "active" : ""} key={i}>
                  {char}
                </span>
              );
            })}
          </div>
          <input
            id="input-word"
            value={inputValue}
            type="text"
            placeholder="~"
            onChange={({ target }) => this.handleOnChange(target.value)}
          />
        </div>
      </StageStyled>
    );
  }
}
