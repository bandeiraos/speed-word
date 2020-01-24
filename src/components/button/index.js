import React, { forwardRef } from "react";
import { ButtonStyled } from "./styles";

const Button = forwardRef(({ text, ...props }, ref) => (
  <ButtonStyled ref={ref} {...props}>
    {text}
  </ButtonStyled>
));

export default Button;
