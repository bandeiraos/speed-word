import React from "react";
import { HeaderStyled } from "./styles";
import Logo from "../../assets/images/logo-bob.png";

export default function Header() {
  return (
    <HeaderStyled style={{ backgroundImage: `url(${Logo})` }}></HeaderStyled>
  );
}
