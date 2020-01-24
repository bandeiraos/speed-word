import React from "react";
import { MenuStyled } from "./styles";
import Button from "../../components/button";
import RegressiveCounter from "../../components/regressive-counter";

export default function Menu({ regressive, onStart }) {
  return (
    <MenuStyled>
      <RegressiveCounter counter={regressive} />
      {!regressive && (
        <div className="btns">
          <Button text="Iniciar" onClick={onStart} />

          <span>
            Speed Bobiça v0.01 by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/bandeiraos"
            >
              @bandeiraos
            </a>
          </span>
        </div>
      )}
    </MenuStyled>
  );
}
