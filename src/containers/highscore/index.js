import React, { useState, useEffect } from "react";
import { HighscoreStyled } from "./styles";
import api from "../../services/api";

export default function Highscore({ nickname, corrects, counterChars, ...props }) {
  const [highs, setHighs] = useState([]);
  const [newHighscore, setNewHighscore] = useState(false);
  const [newHighId, setNewHighId] = useState(null);

  useEffect(() => {
    if (!nickname) {
      getHighs();
    } else {
      newHigh();
    }
  }, []);

  async function getHighs() {
    const response = await api.get("/highs");
    setHighs(response.data);
  }

  async function newHigh() {
    const response = await api.post("/high", {
      name: nickname,
      words: corrects,
      chars: counterChars
    });
    const { newHighscore, high } = response.data;
    setNewHighscore(newHighscore);
    if (high) {
      const { _id } = high;
      setNewHighId(_id);
    }
    getHighs();
  }

  return (
    <HighscoreStyled {...props}>
      <h2>Top 10</h2>
      {newHighscore && (
        <span className="span-highscore">Você entrou no TOP 10!</span>
      )}
      {highs.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Nome</th>
              <th>Palavras</th>
              <th>Letras</th>
            </tr>
          </thead>

          <tbody>
            {highs.map((item, i) => (
              <tr
                key={item._id}
                className={item._id === newHighId ? "new" : ""}
              >
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.words}</td>
                <td>{item.chars}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </HighscoreStyled>
  );
}
