import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./globalStyles";
import Stage from "./containers/stage";
import EndStage from "./containers/end";
import WORDS from "./words";
import Menu from "./containers/menu";
import Highscore from "./containers/highscore";
import Header from "./components/header";

function App() {
  const [wordList, setWordList] = useState(WORDS);
  const [word, setWord] = useState(null);
  const [endGame, setEndGame] = useState(false);
  const [correctsWord, setCorrectsWord] = useState([]);
  const [counterCorrectsChars, setCounterCorrectsChars] = useState(0);
  const [regressive, setRegressive] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [menuActive, setMenuActive] = useState(true);
  const [nickname, setNickname] = useState("");

  function handleOnStart() {
    startRegressiveCount();
  }

  function startRegressiveCount() {
    setRegressive(3);
    setTimeout(() => {
      setRegressive(2);
      setTimeout(() => {
        setRegressive(1);
        setTimeout(() => {
          setRegressive(null);
          setMenuActive(false);
          startGame();
        }, 1000);
      }, 1000);
    }, 1000);
  }

  function startGame() {
    setTimer();
    setGameStarted(true);
  }

  function setTimer() {
    setTimeout(() => {
      setEndGame(true);
    }, 10000);
  }

  useEffect(() => {
    setWord(randomWord());
  }, [wordList]);

  useEffect(() => {
    if (correctsWord.length > 0)
      setCounterCorrectsChars(
        counterCorrectsChars + correctsWord[correctsWord.length - 1].length
      );
  }, [correctsWord]);

  function changeCorrectWord() {
    setCorrectsWord([...correctsWord, word]);
    setWordList(wordList.filter(w => w !== word));
  }

  function randomWord() {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];
    return newWord;
  }

  function resetStats() {
    setGameStarted(false);
    setCorrectsWord([]);
    setEndGame(false);
    setWordList(WORDS);
    setCounterCorrectsChars(0);
  }

  function handleTryAgain() {
    resetStats();
    setMenuActive(true);
    startRegressiveCount();
  }

  function handleBackMenu() {
    setMenuActive(true);
    resetStats();
  }

  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <div className="content">
        {menuActive && !endGame && (
          <Menu
            regressive={regressive}
            onStart={handleOnStart}
            onChangeNick={nick => setNickname(nick)}
            startDisabled={nickname.length === 0}
            nick={nickname}
          />
        )}
        {gameStarted && word && !endGame && (
          <Stage
            word={word}
            handleOnCorrect={() => changeCorrectWord()}
            totalCorrects={correctsWord.length}
          />
        )}
        {endGame && (
          <EndStage
            nickname={nickname}
            counter={counterCorrectsChars}
            corrects={correctsWord}
            tryAgain={handleTryAgain}
            backMenu={handleBackMenu}
          />
        )}
      </div>
    </div>
  );
}

export default App;
