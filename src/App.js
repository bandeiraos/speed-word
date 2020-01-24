import React, { useState, useEffect } from 'react';
import { GlobalStyles } from './globalStyles'
import Stage from './components/stage';
import api from './api'
import EndStage from './components/end';

const palavras = [
  'gola',
  'sambiqueira',
  'catinga',
]

function App() {

  const [wordList, setWordList] = useState([])
  const [word, setWord] = useState(null)
  const [endGame, setEndGame] = useState(true)
  const [correctsWord, setCorrectsWord] = useState(['ohh'])
  const [counterCorrectsChars, setCounterCorrectsChars] = useState(0)

  useEffect(() => {
    async function loadWords() {
      const resp = await api.get()
      console.log('resp.data', resp.data)
      setWordList(resp.data)
      setTimeout(() => {
        setEndGame(true)
      }, 5000);
    }

    loadWords();
  }, [])

  useEffect(() => {
    setWord(randomWord())
  }, [wordList])

  useEffect(() => {
    if (correctsWord.length > 0)
      setCounterCorrectsChars(counterCorrectsChars + correctsWord[correctsWord.length - 1].length)
  }, [correctsWord])

  function changeCorrectWord() {
    setCorrectsWord([...correctsWord, word]);
    setWordList(wordList.filter(w => w !== word));
  }

  function randomWord() {
    const newWord = wordList[Math.floor(Math.random() * wordList.length)];
    return newWord
  }

  function handleTryAgain() {
    
  }

  return (
    <div className="App">
      <GlobalStyles />
      {
        word && !endGame &&
        <Stage
          word={word}
          handleOnCorrect={() => changeCorrectWord()}
        />
      }

      {
        endGame && <EndStage
          counter={counterCorrectsChars}
          corrects={correctsWord}
          tryAgain={handleTryAgain}
        />
      }
    </div>
  );
}

export default App;
