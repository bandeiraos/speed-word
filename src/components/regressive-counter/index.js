import React from "react";
import { RegressiveStyled } from "./styles";

export default function RegressiveCounter({ counter, ...props }) {
  return (
    <RegressiveStyled>
      <div>{counter}</div>
      <div>Digite o máximo de palavras em 10 segundos</div>
    </RegressiveStyled>
  );
}
