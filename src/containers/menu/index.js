import React, { useState } from "react";
import { MenuStyled } from "./styles";
import Button from "../../components/button";
import RegressiveCounter from "../../components/regressive-counter";
import Highscore from "../highscore";

export default function Menu({
  regressive,
  onStart,
  nick,
  onChangeNick,
  startDisabled
}) {
  const [viewRanking, setViewRanking] = useState(false);
  const [rankingLoaded, setRankingLoaded] = useState(false);

  function handleStart(e) {
    e.preventDefault();
    onStart();
  }

  return (
    <MenuStyled>
      <RegressiveCounter counter={regressive} />
      {!regressive && (
        <div className="btns">
          <form onSubmit={handleStart}>
            <input
              placeholder="Seu nick gamer"
              onChange={e => onChangeNick(e.target.value)}
              maxLength="25"
              value={nick}
            />

            <Button type="submit" text="Iniciar" disabled={startDisabled} />
            <Button
              type="button"
              text="Top 10"
              onClick={() => {
                setRankingLoaded(true);
                setViewRanking(!viewRanking);
              }}
            />
          </form>

          {rankingLoaded && (
            <Highscore
              style={{ marginTop: 30, display: viewRanking ? "block" : "none" }}
            />
          )}
          <span>
            Speed Bobiça v0.02 by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/bandeiraos"
            >
              @bandeiraos
            </a>
          </span>
        </div>
      )}
    </MenuStyled>
  );
}
